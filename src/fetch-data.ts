async function fetchData(error = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error('failed'))
      }
      resolve('peanut butter')
    }, 100)
  })
}

export { fetchData }
