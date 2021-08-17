import { useState } from 'react'

const useToken = () => {
  const getToken = () => {
    const tokenStr = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenStr)
    return userToken?.token
  }

  const [token, setToken] = useState(getToken())

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken)
  }

  return {
    setToken: saveToken,
    token
  }
}

export default useToken
