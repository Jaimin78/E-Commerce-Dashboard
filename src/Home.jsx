import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [productList, setProductList] = useState([]);
  
  useEffect(()=>{
    getProduct();
  },[])

  const getProduct = async () => {
    let data = await fetch('https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product');
    data = await data.json();
    setProductList(data);
  }

  const productDelete = async (id) => {
     let remove = await fetch(`https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product/delete/${id}`,{
       method:'delete'
     })
     if(remove){
       getProduct()
     }
  }
  
  return(
    <>
      <main>
      <h1>Product List</h1>
      <Table className="container" striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Category</th>
          <th colSpan={2}>Operation</th>
        </tr>
      </thead>
      <tbody>
        {
          productList.map((item,i)=>
         <tr key={i}>
          <td>{i+1}</td>
          <td><img style={{width:50}} src={item.imageUrl}/></td>
          <td>{item.name}</td>
          <td>₹{item.price}</td>
          <td>{item.brand}</td>
          <td>{item.category}</td>
          <td><Button className="btn btn-success"><Link to={`/update/${item._id}`}>Update</Link></Button></td>
          <td><Button className="btn btn-danger" onClick={() => productDelete(item._id)}>Delete</Button></td>
        </tr>)
        }
      </tbody>
    </Table>
    </main>
   </>
  )
}

export default Home;