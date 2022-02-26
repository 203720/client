import axios from "axios";

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
        <div class="container">
           {/* <div>
            <div className="box">
                <form>
                    <label>Username:</label>
                    <input class="input is-info" type="text" id="username" required/>
                    <label>Password:</label>
                    <input class="input is-info" type="password" id="password" required/>
                    <label>Password2:</label>
                    <input class="input is-info" type="password" id="password2" required/>
                    <label>Email:</label>
                    <input class="input is-info" type="text" id="email" required/>
                    <label>FirstName:</label>
                    <input class="input is-info" type="text" id='first_name' required/>
                    <label>LastName:</label>
                    <input class="input is-info" type="text" id='last_name' required/>


                </form>
            </div>
           </div> */}
           <div class="row g-3">

           <div class="col-md-4">
                <label class="form-label">First name</label>
                <input type="text" class="form-control" id="first_name" required/>
            </div>

            <div class="col-md-4">
                <label class="form-label">Last name</label>
                <input type="text" class="form-control" id="last_name" required/>
            </div>

            <div class="col-md-4">
                <label class="form-label">Username</label>
                <div class="input-group has-validation">
                <input type="text" class="form-control" id="username" aria-describedby="inputGroupPrepend" required/>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required/>
            </div>
            <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                Must be 8-20 characters long.
                </span>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                <input type="password" class="form-control" id="password2" required/>
            </div>
            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            </div>

           <header className="App-header">
            <button type="submit" class="btn btn-primary" onClick={consume_register}>Register</button>
               {/* <button onClick={consume_register}> Register </button> */}
            </header>
        </div>
    );


};


export default Register;