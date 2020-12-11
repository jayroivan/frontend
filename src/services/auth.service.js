import axios from "axios";

const API_URL = "https://saturno2020.herokuapp.com/api/auth/";
const API_URL2 = "https://saturno2020.herokuapp.com/tarjeta/one/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
  logoutadmin() {
    localStorage.removeItem("admin");
  }

  loginadmin(username, password) {
    return axios
      .post(API_URL + "signin/admin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("admin", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getCurrentAdmin() {
    return JSON.parse(localStorage.getItem('admin'));;
  }

  getCurrentTarjeta(id) {
    return axios 
      .get(API_URL2 + id)
      .then(response => {
        return JSON.stringify(response.data);
      });
  }
}

export default new AuthService();