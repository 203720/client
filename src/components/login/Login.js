import axios from "axios";

function App() {

  var postData = {
    "username" :"azul",
    "password" : "203720"
  }

  const consume_login = () => {

    axios.post("http://localhost:8000/api/v1/login/",postData, {Headers:{"Content-Type":"Application/json",},}).then((response) => {
      console.log(response.data.token);
    }).catch((error) => {
      console.log(error.data.password[0]);
      console.log(error.data.username[0]);
    })
  };

  return (
    <div>
      <header className="App-header">
        <button onClick={consume_login}> Login </button>
      </header>
    </div>
  );

};

export default App;
