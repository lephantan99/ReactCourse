import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const { search, filterStock } = this.props
    return (
      <div
        style={{ padding: '10px', border: 'solid 2px blue', textAlign: 'left' }}
      >
        <input
          type='text'
          name='Search'
          placeholder='Search...'
          onChange={search}
        />
        <div>
          <input type='checkbox' name='Check box' onChange={filterStock} />
          Only show products in stock
        </div>
      </div>
    )
  }
}

export default SearchBar
