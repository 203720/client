import axios from "axios";
import './Register.css';

function Register(){
    const consume_register=()=> {

        var postData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            password2: document.getElementById('password2').value,
            email: document.getElementById('email').value,
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value
        }

        axios.post("http://localhost:8000/api/v1/register",postData, {Headers:{"Content-Type":"Application/json",},}).then((response) => {
          console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data);
            // console.log(error.data.password[0]);
            // console.log(error.data.username[0]);
        })
      }

    return (
        <div >
            <section class="gradient-custom"  >
                <div class="container py5 " style={{'bottom':'5px'}}>
                <div class="row justify-content-center align-items-center">
                    <div class="col-6 col-md-12 col-lg-6 "  >
                    <div class="card bg-dark text-white" style={{'border-radius': '1rem'}}>
                        <div class="card-body p-5 text-center">

                        <div class="mb-md-5 mt-md-4 pb-5">

                            <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                            <p class="text-white-50 mb-5"></p>

                            <div class="form-outline form-white mb-4">
                            <input type="text" id="first_name" class="form-control form-control-lg" required/>
                            <label class="form-label" for="typeEmailX">FirstName</label>
                            </div>

                            <div class="form-outline form-white mb-4">
                            <input type="text" id="last_name" class="form-control form-control-lg" required/>
                            <label class="form-label" for="typeEmailX">LastName</label>
                            </div>

                            <div class="form-outline form-white mb-4">
                            <input type="text" id="username" class="form-control form-control-lg" required/>
                            <label class="form-label" for="typeEmailX">Username</label>
                            </div>

                            <div class="form-outline form-white mb-4">
                                <input type="email" id="email" class="form-control form-control-lg" />
                                <label class="form-label" for="typeEmailX">Email</label>
                            </div>

                            <div class="form-outline form-white mb-4">
                            <input type="password" class="form-control form-control-lg" id="password" required />
                            <label class="form-label" for="typePasswordX">Password</label>
                            </div>

                            <div class="form-outline form-white mb-4">
                            <input type="password" class="form-control form-control-lg" id="password2" required />
                            <label class="form-label" for="typePasswordX">Password2</label>
                            </div>

                            <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={consume_register}>Register</button>

                        </div>

                        <div>
                            <p class="mb-0">Have an account? <a href="." class="text-white-50 fw-bold">LogIn</a></p>
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


export default Register;