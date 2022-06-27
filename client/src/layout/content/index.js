import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/pagination.css"
import ItemCard from "../../components/ItemCard";
import Message from "../../components/Message";
import Search from "../../components/Search";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://gadgetly.herokuapp.com/api"
    : "http://127.0.0.1:5100/api";

const Content = (props) => {
  // state init
  const [itemData, setItemData] = useState([]);
  const [msgData, setMsgData] = useState("");
  const [err, setErr] = useState();

  // Pagination
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  async function loadItems() {
    try {
      const response = await axios.get(props.endpoint, {
        baseURL: apiUrl,
        method: "GET",
        mode: "cors",
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
  const updateItemList = () => {
    loadItems()
      .then((result) => {
        result.length > 0 ? setItemData(result) : setItemData([]);
        setMsgData(
          result.length > 0
            ? `Found ${result.length} items`
            : "no items were found"
        );
        console.log("updated");
      })
      .catch((err) => {
        setErr(err);
      });
  };
  useEffect(() => {
    updateItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(itemData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemData.length / itemsPerPage));
  }, [itemData, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemData.length;
    setItemOffset(newOffset);
  };

  const itemCards = currentItems?.map((item) => {
    return (
      <Col key={item._id || ""} className="item">
        <a href={`${props.endpoint}/${item._id}`}>
          <ItemCard
            title={item.itemName ? item.itemName.slice(0, 35) + "..." : ""}
            itemImage={item.img || ""}
            grade={item.itemStatus || ""}
            //todo *  carrier to description
            quantity={item.quantity || ""}
            description={
              item.description ? item.description.slice(0, 60) + "..." : ""
            }
            postedOn={item.createdAt ? item.createdAt.slice(0, 10) : ""}
            ram={item.storageSize || ""}
            graphicsCard={item.graphicsCard || item.processor || ""}
            storageSize={item.storageSize || ""}
            cost={`$${item.cost || ""}`}
          />
        </a>
      </Col>
    );
  });

  return (
    <div>
      <Container className="Itemlist">
        <Message onClick={updateItemList} msgData={msgData} err={err} />
        <Search />

        <div className="content d-flex flex-column align-items-center justify-content-center">
          <Row xs={2} sm={2} md={3} lg={4} xl={5}>
            {itemCards}
          </Row>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </Container>
    </div>
  );
};

export default Content;
