import axios from "axios";

export const axiosWithAuth = () => {

    const token = localStorage.getItem("token"); // token ı localstorage dan alıyoruz
  
    return axios.create({
      headers: {
        Authorization: token,
      }
    })
  };