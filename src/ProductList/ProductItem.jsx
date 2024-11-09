import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    const { product } = this.props
    return (
      <div
        className='product-item'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          border: '2px solid green'
        }}
      >
        <span>
          Name: <b>{product.username}</b>
        </span>
        <img
          src={product.image}
          alt={product.image}
          width='100'
          height='100'
          style={{ margin: '0px 20px' }}
        />
        <input></input>
      </div>
    )
  }
}

export default ProductItem
