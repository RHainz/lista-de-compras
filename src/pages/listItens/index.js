import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function ListItens() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    productName: "",
    quantity: "",
    image: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/listCompraAR",
        form
      );

      navigate("/");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product: </label>
      <input
        id="product"
        name="productName"
        type="text"
        value={form.productName}
        onChange={handleChange}
      />

      <label htmlFor="quantity">Quantity: </label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        value={form.quantity}
        onChange={handleChange}

      />


      <button type="submit">Send</button>
    </form>
  );
}