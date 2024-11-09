import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import './FilterableProductTable.css'

const lists = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [],
      searchText: '',
      inStock: null
    }
  }

  componentDidMount() {
    fetchApi().then((res) =>
      this.setState((prevState) => ({
        productList: res
      }))
    )
  }

  filterStock = (event) => {
    console.log(event.target.checked)
    this.setState({
      inStock: event.target.checked
    })
  }
  search = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }
  render() {
    return (
      <div className='FilterProductTable'>
        <SearchBar filterStock={this.filterStock} search={this.search} />
        <ProductTable
          productList={this.state.productList}
          searchText={this.state.searchText}
          inStock={this.state.inStock}
        />
      </div>
    )
  }
}

export default FilterableProductTable
