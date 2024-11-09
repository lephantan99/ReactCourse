// import React from 'react'
// import './cart.scss'
// import * as Styled from './Cart.style'

// export function Buttons({ isShow, className }) {
//   return (
//     <div className={className + ' buttons'}>
//       <button
//         className='button-item'
//         style={{
//           backgroundColor: 'yellow',
//           display: isShow ? 'inline-block' : 'none'
//         }}
//       >
//         hello
//       </button>
//     </div>
//   )
// }

// export default function Cart({ isShow }) {
//   return (
//     <Styled.ContainerExtends>
//       Cart
//       <Styled.StyledButtons isShow={isShow} />
//     </Styled.ContainerExtends>
//   )
// }

import React, { Component } from 'react'
import './cart.scss'

export default class Cart extends Component {
  render() {
    return (
      <div className='container'>
        Cart
        <div className='buttons' style={{ backgroundColor: 'red' }}>
          hello
        </div>
      </div>
    )
  }
}
