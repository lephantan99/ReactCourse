import React, { useState } from 'react'
import { useEffect } from 'react'

export default function UserFunctional() {
  const [name] = useState('Helen')
  const [age, setAge] = useState(18)
  const [address, setAddress] = useState({
    nation: 'Viet Nam',
    city: {
      street: 'Le Do',
      house: 'Building'
    }
  })

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const changeAddress = () => {
    setAddress((prev) => ({
      ...prev,
      city: {
        ...prev.city,
        street: 'Phung Hung'
      }
    }))
  }

  useEffect(() => {
    console.log(document.getElementsByTagName('li'))
    console.log('use Effect')
  }, [])

  return (
    <div>
      <h1>User Class Component</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeAddress}>Change Address</button>
    </div>
  )
}
