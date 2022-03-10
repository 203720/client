import axios from "axios";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {

  const requestOptions = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
    },  
  };

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem('token', value.token);
      localStorage.setItem('id_user', value.user_id);
    } catch (error) {
    }
  }

  const consume_login = () => {

    var postData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    var url = "http://localhost:8000/api/v1/login";

    axios.post(url,postData, requestOptions)
    .then((response) => {
      setLocalStorage(response.data)
      window.location="/profile";
    })
    .catch((error) => {
      var aux = error.response.data.non_field_errors;
      if (aux == null) {
        alert("Ingrese los datos de todos los campos")
      } else {
        alert("No existe un usuario con esos datos")
      }
    })
  };

  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong card-registration" style={{'border-radius': '15px'}}>

                <div class="card-body p-4 p-md-5">
                  <h2 class="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h2>

                    <div class="form-outline">
                      <input type="text"class="form-control form-control-lg" id="username" required/>
                      <label class="form-label" for="userName">Username</label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password"class="form-control form-control-lg" id="password" required />
                      <label class="form-label" for="password">Password</label>
                    </div>

                    <div class="pt-1 mb-4">
                      <button class="btn btn-outline-primary d-grid gap-2 col-6 mx-auto" type="submit" value="Submit" onClick={consume_login}>Login</button>
                    </div>

                    <div>
                        <p class="mb-0">Don't have an account? <Link to="/Register" class="text-black-50 fw-bold">Sign Up</Link></p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div>
        </div>
      </section>



    </div>

  );
};

export default Login;
