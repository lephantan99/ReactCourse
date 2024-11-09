import React, { Component } from 'react'

export class ProductRow extends Component {
  render() {
    return (
      <tr style={{ textAlign: 'left' }}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

export default ProductRow
