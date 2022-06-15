import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import Message from "../../components/Message";
import Search from "../../components/Search";

const apiUrl = (process.env.NODE_ENV === "production") ? "https://gadgetly.herokuapp.com/api" :"http://127.0.0.1:5100/api"

const Content = (props) => {
  // state init
  const [itemData, setItemData] = useState([]);
  const [msgData, setMsgData] = useState("");
  const [err, setErr] = useState();

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
        setMsgData(result.length > 0 ? `Found ${result.length} items` : "no items were found");
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

  const itemCards = itemData.map((item) => {
        return (
          <Col key={item._id || ""} className="item">
            <a href={`${props.endpoint}/${item._id}`}>
            <ItemCard
              title={item.itemName ? (item.itemName.slice(0, 35) + "...") : ""}
              itemImage={item.img || ""}
              grade={item.itemStatus || ""}

              //todo *  carrier to description
              quantity={item.quantity || ""}
              description={item.description ? (item.description.slice(0, 60) + "...") : ""}
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

        <div className="content">
          <Row xs={2} sm={2} md={3} lg={4} xl={5}>
            {itemCards}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Content;
