import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState(""); 
  const [imageUrl, setImage] = useState("");
  
  const navigate = useNavigate();
  const params = useParams();
  useEffect(()=>{
    //console.log(params)
    getProduct()
  },[])

  const getProduct = async () => {
    let result= await fetch(`https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product/get/${params.id}`)
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setBrand(result.brand);
    setCategory(result.category);
    setImage(result.imageUrl);
  }
  
  const updateProduct = async () => {
    //console.log(name, price, brand, category, imageUrl);
    let result = await fetch(`https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product/update/${params.id}`,{
      method:'put',
      body: JSON.stringify({name, price, brand, category, imageUrl}),
      headers: {
        'Content-type':'application/json'
      }
    })
    result = await result.json();
    navigate('/')
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