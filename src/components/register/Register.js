import axios from "axios";
import './Register.css';
import { Link } from "react-router-dom";

function Register(){
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },  
    };

    const consume_register=()=> {

        var postData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            password2: document.getElementById('password2').value,
            email: document.getElementById('email').value,
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value
        }

        var url = "http://localhost:8000/api/v1/register/";

        axios.post(url,postData, requestOptions)
        .then((response) => {
            window.location="/login/";
        })
        .catch((error) => {
            alert("No se pudo registrar. Registre los datos correctamente")
        })
    }

    return (
        <div>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card shadow-2-strong card-registration" style={{'border-radius':'15px'}}>
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="text" id="first_name" class="form-control form-control-lg" />
                                                <label class="form-label" for="firstName">First Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="text" id="last_name" class="form-control form-control-lg" />
                                                <label class="form-label" for="lastName">Last Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline datepicker w-100">
                                                <input type="text" class="form-control form-control-lg" id="username"/>
                                                <label for="userName" class="form-label">Username</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="email" id="email" class="form-control form-control-lg" />
                                                <label class="form-label" for="emailAddress">Email</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">    
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline datepicker w-100">
                                                <input type="password" class="form-control form-control-lg" id="password"/>
                                                <label for="password" class="password">Password</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="password" id="password2" class="form-control form-control-lg" />
                                                <label class="form-label" for="password">Confirm your password</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pt-1 mb-4">
                                        <button class="btn btn-outline-primary d-grid gap-2 col-6 mx-auto" type="submit" value="Submit" onClick={consume_register}>Register</button>
                                        </div>

                                    <div>
                                        <p class="mb-0">Have an account? <Link to="/Login" class="text-black-50 fw-bold">LogIn</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default Register;