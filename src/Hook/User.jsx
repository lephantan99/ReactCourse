import React, { useState } from 'react'
import { useEffect } from 'react'

const initialAddress = () => {
  return {
    nation: 'Viet Nam',
    city: {
      street: 'Le Do',
      house: 'Building'
    }
  }
}

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100 Nguyen Phuoc Nguyen',
          house: 'House'
        }
      })
    }, 3000)
  })
}

export default function UserFunctional() {
  const [name] = useState('Helen')
  const [age, setAge] = useState(18)
  const [address, setAddress] = useState(initialAddress) //tips: If pass initialAddress() it runs every re-render while in reality just need run 1 time initial, so just pass initialAddress or () => initialAddress() to avoid run unnecessary
  const [, forceRerender] = useState(0)

  const reRender = () => {
    forceRerender((prevState) => prevState + 1)
  }

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const changeAddress = () => {
    // setAddress((prev) => {
    //   const newCity = { ...prev.city }
    //   newCity.street = '100 Phung Hung'
    //   return {
    //     ...prev,
    //     city: newCity
    //   }
    // })
    setAddress((prev) => ({
      ...prev,
      city: {
        ...prev.city,
        street: '100 Dien Bien Phu'
      }
    }))
  }

  useEffect(() => {
    console.log(document.getElementsByTagName('li'))
    console.log('use Effect', getAddress())
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress }
        newAddress.city = res.city
        return prevAddress
      })
    })

    // Clean up function chạy trước khi component bị destroy // đối với trường hợp re-render lại component nó sẽ chạy trước khi re-render || trước khi compnent xuất hiện lại
    return () => {
      console.log('Component is destroyed!!!')
    }
  }, []) // khi dùng 1 state trong useEffect cần phải đưa state vào trong deps arr để đảm bảo tính chính xác

  return (
    <div>
      <h1>User Functional Component</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Nation: {address.nation}</li>
        <li>Street: {address.city.street}</li>
        <li>House: {address.city.house}</li>
      </ul>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={reRender}>Re-render</button>
      <button onClick={changeAddress}>Change Address</button>
    </div>
  )
}
