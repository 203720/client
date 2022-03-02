import axios from "axios";
import './Login.css';
import Register from '../register/Register';
import { Link } from "react-router-dom";

function Login() {

  const consume_login = () => {

    var postData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    axios.post("http://localhost:8000/api/v1/login",postData, {Headers:{"Content-Type":"Application/json",},}).then(response => {
      alert(response.data.token)
      localStorage.setItem('token', response.data.token)

      window.location="http://localhost:3000/Register";
    }).catch((error) => {
      alert("Error. "+ error.response.data);
    })
  };

  return (
    
    <div>
      <section class="gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style={{'border-radius': '1rem'}}>
                <div class="card-body p-5 text-center">

                  <div class="mb-md-5 mt-md-4 pb-5">

                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5"></p>

                    <div class="form-outline form-white mb-4">
                      <input type="text" id="username" class="form-control form-control-lg" required/>
                      <label class="form-label" for="typeEmailX">Username</label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password" class="form-control form-control-lg" id="password" required />
                      <label class="form-label" for="typePasswordX">Password</label>
                    </div>

                    <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={consume_login}>Login</button>

                  </div>

                  <div>
                    <p class="mb-0">Don't have an account? <Link to="/Register" class="text-white-50 fw-bold">Sign Up</Link></p>
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





    // <div>
    //   <header className="App-header">
    //     <button onClick={consume_login}> Login </button>
    //   </header>
    // </div>

    // <div class = "container">
    //     <div class="row g-3">
          
    //       <div class="col-md-4">
    //           <label class="form-label">Username</label>
    //           <div class="input-group has-validation">
    //           <input type="text" class="form-control" id="username" aria-describedby="inputGroupPrepend" required/>
    //           </div>
    //       </div>
    //       <div class="mb-3">
    //           <label for="exampleInputPassword1" class="form-label">Password</label>
    //           <input type="password" class="form-control" id="password" required/>
    //       </div>
    //     </div>
    //       <header className="App-header">
    //       <button type="submit" class="btn btn-primary" onClick={consume_login}>Register</button>
    //           {/* <button onClick={consume_register}> Register </button> */}
    //       </header>
    // </div>


    
  );

};

export default Login;
