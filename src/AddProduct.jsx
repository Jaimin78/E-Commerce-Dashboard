import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState(""); 
  const [imageUrl, setImage] = useState("");

  const addProduct = async () => {
    //console.log(name, price, brand, category);
    let userId = JSON.parse(localStorage.getItem('user'))._id;
    console.log(userId)
    let result = await fetch('https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product/add',{
       method:'post',
       body: JSON.stringify({name, price, brand, category, userId, imageUrl}),
       headers: {
         'Content-Type':'application/json'
       }
    })
    result = await result.json();
    console.log(result)
  }

  return (
    <>
      <Container className="my-4">
        <h1>Add Product</h1>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Brand Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Brand Name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={imageUrl}
            onChange={(e) => setImage(e.target.value)}
          />
          <center><img style={{width:200}} src={imageUrl}/></center>
        </Form.Group>

        <Button variant="primary" type="submit"
          onClick={addProduct}>
          Add Product
        </Button>
      </Container>
    </>
  )
}

export default AddProduct;