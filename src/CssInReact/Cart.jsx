import React from 'react'
import './cart.scss'
import * as Styled from './Cart.style'

export function Buttons({ isShow, className }) {
  return (
    <div className={className + ' buttons'}>
      <button
        className='button-item'
        style={{
          backgroundColor: 'yellow',
          display: isShow ? 'inline-block' : 'none'
        }}
      >
        hello
      </button>
    </div>
  )
}

export default function Cart({ isShow }) {
  return (
    <Styled.ContainerExtends>
      Cart
      <Styled.StyledButtons isShow={(isShow = true)} blue />
    </Styled.ContainerExtends>
  )
}

// import React, { Component } from 'react'
// // import './cart.scss'
// import styled from 'styled-components'

// const Container = styled.div`
//   max-width: 1510px;
//   margin: auto;
//   padding-left: 1rem;
//   padding-right: 1rem;
// `
// export default class Cart extends Component {
//   render() {
//     return (
//       <Container>
//         Cart
//         <div className='buttons' style={{ backgroundColor: 'red' }}>
//           hello
//         </div>
//       </Container>
//     )
//   }
// }
