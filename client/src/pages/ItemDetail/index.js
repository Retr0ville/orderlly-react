import React, { useEffect, useState} from "react";

import SingleItem from "../../layout/SingleItem";
import { useHistory } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
// import { useParams } from 'react-router-dom';
import axios from "axios";

const apiUrl = (process.env.NODE_ENV === "production") ? "https://gadgetly.herokuapp.com/api" :"http://127.0.0.1:5100/api"
//use hooks later
const ItemDetail = (props) => {
  // const [itemId, setItemId] = useState("");
  let history = useHistory();
  const [itemData, setItemData] = useState({});
  // const [err, setErr] = useState("");

  // const { id } = useParams();
  async function fetchData() {
      
     const response = await axios.get(props.url, {
      baseURL: apiUrl,
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
      setItemData(data);
    }).catch(() => {
      // redirect to 404 page
      history.push("/404");
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
