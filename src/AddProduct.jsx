import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = () => {
    console.log(name, price, brand, category)
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

        <Button variant="primary" type="submit"
          onClick={addProduct}>
          Add Product
        </Button>
      </Container>
    </>
  )
}

export default AddProduct;