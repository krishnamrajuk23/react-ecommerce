import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import './CreateProduct.scss';

const CreateProduct = (props: any) => {
  const [productName, setProductName] = useState(props.productName || '');
  const [productCost, setProductCost] = useState(props.productCost || '');
  const [formData, setFormData] = useState({
    productName: '',
    productCost: ''
  });
  const onChangeProductName = (event: any) => {
    setProductName(event.target.name)
  }

  const onChangeProductCost = (event: any) => {
    setProductCost(event.target.name)
  }

  const submitHandler = (event: any) => {
    setFormData((preFormData) => {
      return {
        ...preFormData,
        productName,
        productCost
      }
    });
    console.log(formData);
  }


  return (
   <Form className='create-product'>
    <Form.Group className="mb-3" controlId="productName">
      <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product Name" value={productName} onChange={onChangeProductName}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="productCost">
      <Form.Label>Product Cost</Form.Label>
        <Form.Control type="number" placeholder="Product Cost" min={1} max={1000000}
          value={productCost} onChange={onChangeProductCost}
      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productCost">
      <Form.Label>description</Form.Label>
      <Form.Control type="text" placeholder="description"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onSubmit={submitHandler}>
      Submit
    </Button>
  </Form>
  )
}

export default CreateProduct;