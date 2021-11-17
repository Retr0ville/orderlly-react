import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import Message from "../../components/Message";
import Search from "../../components/Search";

const Content = (props) => {
  // state init
  const [itemData, setItemData] = useState([]);
  const [msgData, setMsgData] = useState("");
  const [err, setErr] = useState();

  async function loadItems() {
    try {
      const response = await axios.get(props.endpoint);
      console.log(response.data.message);
      return response.data.data;
    } catch (err) {
      return err;
    }
  }
  const updateItemList = () => {
    console.log("updating");
    loadItems()
      .then((result) => {
        result.data ? setItemData(result.data) : setItemData([]);
        setMsgData(result.data ? `Found ${result.data.length} items` : "no items were found");
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
    const { imgUrl, name } = item;

    if (item.data) {
      return item.data.map(({ price }) => {
        const { id, amount, quantity, grade, description, storageSize, createdAt } =
          price;
        //  price : {}
        return (
          <Col key={id || ""} className="item">
            <ItemCard
              itemImage={imgUrl || ""}
              grade={grade || ""}

              //todo *  carrier to description
              quantity={quantity || ""}
              description={description || ""}
              postedOn={createdAt ? createdAt.slice(0, 10) : ""}
              title={name || ""}
              storageSize={storageSize || ""}
              cost={`$${amount || ""}`}
            />
          </Col>
        );
      });
    } else return [];
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
