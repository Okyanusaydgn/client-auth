import axios from "axios";
import { useState } from "react";
import "./App.css";

// aşağıda bir login yapısı alıyoruz. email ve password giriş doğru gerçekleşirse güvenli geçiş sağlanır ve sayfaya geçiş gerçekleşir
const login = (email, password) => {
  axios
    .post("https://regres.in/api/login", {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log("Başarılı giriş");
    })
    .catch((error) => {
      console.error("Hata oluştu:", error);
    });
};

function Login() {
  const [formData, setFormDate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDate({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = formData;

    login(email, password);

    const token = localStorage.getItem("token");

    if (token) {
      console.log("Başarılı giriş!");
    } else {
      console.log("Giriş başarısız!");
    }
  };

  return (
    <div className="Login">
      <p>
        <label>
          Email:&nbsp;&nbsp;
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Password:&nbsp;&nbsp;
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </label>
      </p>
      <input type="button" value="Login" onClick={handleLogin} />
    </div>
  );
}

export default Login;
