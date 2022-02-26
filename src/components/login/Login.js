import axios from "axios";

function Login() {

  const consume_login = () => {

    var postData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    axios.post("http://localhost:8000/api/v1/login",postData, {Headers:{"Content-Type":"Application/json",},}).then((response) => {
      console.log(response.data.token);
    }).catch((error) => {
      console.log(error.data.password[0]);
      console.log(error.data.username[0]);
    })
  };

  return (
    // <div>
    //   <header className="App-header">
    //     <button onClick={consume_login}> Login </button>
    //   </header>
    // </div>

    <div class = "container">
        <div class="row g-3">
          
          <div class="col-md-4">
              <label class="form-label">Username</label>
              <div class="input-group has-validation">
              <input type="text" class="form-control" id="username" aria-describedby="inputGroupPrepend" required/>
              </div>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" required/>
          </div>
        </div>
          <header className="App-header">
          <button type="submit" class="btn btn-primary" onClick={consume_login}>Register</button>
              {/* <button onClick={consume_register}> Register </button> */}
          </header>
    </div>
  );

};

export default Login;
