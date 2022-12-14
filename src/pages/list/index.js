import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ListPage() {
  const { id } = useParams();
  const [ListPage, setList] = useState({});

  console.log(ListPage);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/listCompraAR/${id}`
        );

        setList({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchList();
  }, []);

  return (
    <>
      <h1>{ListPage.productName}</h1>
      <p>{ListPage.productQuantity}</p>
    </>
  );
}