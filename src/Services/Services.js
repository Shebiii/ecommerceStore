import axios from "axios"
import { BASE_URL, NETWORK_ERROR } from "../Constants/Constant"

const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
}

export const loginService = async (Username, password) => {
  try {
    return await axios.post(`${BASE_URL}/signIn`, {
      userName: Username,
      password,
    })
  } catch (error) {
    return NETWORK_ERROR
  }
}

export const SignupService = async (fullName, username, email, password) => {
  try {
    return await axios.post(`${BASE_URL}/signUp`, {
      fullName,
      username,
      email,
      password,
    })
  } catch (error) {
    return error
  }
}

export const ProductService = async (
  name,
  quantity,
  price,
  imageUrl,
  description
) => {
  try {
    return await axios.post(
      `${BASE_URL}/products`,
      {
        name,
        quantity,
        price,
        imageUrl,
        description,
      },
      config
    )
  } catch (error) {
    return NETWORK_ERROR
  }
}

export const GetProductService = async () => {
  try {
    return await axios.get(`${BASE_URL}/products`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
  } catch (error) {
    return NETWORK_ERROR
  }
}
