import React, { useEffect, useState} from "react";
import SingleItem from "../../layout/SingleItem";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
// import { useParams } from 'react-router-dom';
import axios from "axios";

//use hooks later
const ItemDetail = (props) => {
  // const [itemId, setItemId] = useState("");
  const [itemData, setItemData] = useState({});
  // const [err, setErr] = useState("");

  // const { id } = useParams();
  async function fetchData() {
 
     const response = await axios.get(props.url, {
      baseURL: "http://127.0.0.1:5100",
      mode: "cors",
    });
    return response.data;
  
  // catch(err){

  //   console.log(err);
  // }
  // finally{
  //   console.log("finally");
  // }
  }
 
  useEffect(() => {
    // setItemId(id);
    fetchData().then((data) => {
      console.log(data);
      setItemData(data);
    }).catch((err) => {
      console.log(err);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body">
      <Header />
      <div className="main container">
        <SingleItem 
          title={itemData.itemName || ""}
          itemImage={itemData.img || ""}
          grade={itemData.itemStatus || ""}

          //todo *  carrier to description
          quantity={itemData.quantity || ""}
          description={itemData.description || ""}
          postedOn={itemData.createdAt ? itemData.createdAt.slice(0, 10) : ""}
          
          ram={itemData.storageSize || ""}
          graphicsCard={itemData.graphicsCard || itemData.processor || ""}
          storageSize={itemData.storageSize || ""}
          cost={`$${itemData.cost || ""}`}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetail;
