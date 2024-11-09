import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '668baf15ccfa4f6abb792431',
          username: 'Theron',
          image: 'https://loremflickr.com/640/480?lock=5386150392889344'
        },
        {
          id: '668baf15ccfa4f6abb792432',
          username: 'Celestino',
          image: 'https://loremflickr.com/640/480?lock=8672185327550464'
        },
        {
          id: '668baf15ccfa4f6abb792433',
          username: 'Alvis',
          image: 'https://picsum.photos/seed/QPmvt/640/480'
        },
        {
          id: '668baf15ccfa4f6abb792434',
          username: 'Karolann',
          image: 'https://loremflickr.com/640/480?lock=8407388658860032'
        },
        {
          id: '668baf15ccfa4f6abb792435',
          username: 'Werner',
          image: 'https://loremflickr.com/640/480?lock=2107779309371392'
        }
      ]
    }
  }

  sortAlphabet = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.username < b.username) return -1
        if (a.username > b.username) return 1
        return 0
      })
    }))
  }

  add = () => {
    this.setState((prevState) => ({
      productList: [
        ...prevState.productList,
        {
          id: '668baf15ccfa4f6abb792439',
          username: 'Tee',
          image: 'https://loremflickr.com/640/480?lock=8672185327550464'
        }
      ]
    }))
  }

  render() {
    const list = this.state.productList.map((product) => (
      <ProductItem product={product} key={product.id} />
    ))
    return (
      <div>
        <h1 style={{ color: 'red' }}>Product List</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sortAlphabet}>Sort Alphabet</button>
        <div className='product-list'>{list}</div>
      </div>
    )
  }
}

export default ProductList
