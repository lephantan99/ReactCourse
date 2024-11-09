import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    const { productList, searchText, inStock } = this.props
    let lastCategory = null
    const renderRows = []
    productList.forEach((productItem) => {
      if (searchText !== '' && productItem.name.indexOf(searchText) === -1) {
        return
      }
      if (inStock && productItem.stocked) {
        return
      }
      if (productItem.category !== lastCategory) {
        renderRows.push(
          <ProductCategoryRow
            category={productItem.category}
            key={productItem.category}
          />
        )
      }
      renderRows.push(
        <ProductRow product={productItem} key={productItem.name} />
      )
      lastCategory = productItem.category
    })
    lastCategory = null

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    )
  }
}

export default ProductTable
