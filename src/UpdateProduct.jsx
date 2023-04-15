import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState(""); 
  const [imageUrl, setImage] = useState("");

  const updateProduct = async () => {
    console.log(name, price, brand, category, imageUrl);
  }

  return (
    <>
      <Container className="my-4">
        <h1>Update Product</h1>
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
          onClick={updateProduct}>
          Update Product
        </Button>
      </Container>
    </>
  )
}

export default UpdateProduct;