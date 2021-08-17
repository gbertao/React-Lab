import { useState } from 'react'

const useToken = () => {
  //const storage = sessionStorage
  const storage = localStorage

  const getToken = () => {
    const tokenStr = storage.getItem('token')
    const userToken = JSON.parse(tokenStr)
    return userToken?.token
  }

  const [token, setToken] = useState(getToken())

  const saveToken = userToken => {
    storage.setItem('token', JSON.stringify(userToken))
    setToken(userToken)
  }

  return {
    setToken: saveToken,
    token
  }
}

export default useToken
