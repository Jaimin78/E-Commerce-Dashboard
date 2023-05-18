import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    let data = await fetch('https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product',{
      headers:{
        authorization: JSON.parse(localStorage.getItem('token'))
      }
    });
    data = await data.json();
    setProductList(data);
  }

  const productDelete = async (id) => {
    let remove = await fetch(`https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product/delete/${id}`, {
      method: 'delete'
    })
    if (remove) {
      getProduct()
    }
  }

  const searchProduct = async (event) => {
    let key = event.target.value;
    if (key) {
      let search = await fetch(`https://e-commerce-dashboard-backend.jaiminsuthar.repl.co/api/product/search/${key}`);
      search = await search.json();
      setProductList(search)
    } else {
      getProduct()
    }
  }

  return (
    <>
      <main>
        <div className="container my-4">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={searchProduct} />
          </div>
        </div>
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
              productList.map((item, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><img style={{ width: 50 }} src={item.imageUrl} /></td>
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