export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Le Phan Tan',
          age: 26,
          address: 'Da Nang'
        },
        status: 200
      })
    }, 2000)
  })
