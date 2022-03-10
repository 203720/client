import axios from "axios";
import './Profile.css';


function Profile() {

    var token = localStorage.getItem('token');
    let img_url = "";
    var user = localStorage.getItem('id_user');


    const requestOptionsPost = {
        method: 'POST',
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token ' + token,
        },
    };

    const requestOptionsPut = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token ' + token,
        },
    };

    const requestOptionsPut2 = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token,
        },
    };

    const requestOptionsGet = {
        method: 'GET',
        headers: { 
            'Authorization': 'Token ' + token,
        },
    };

    const requestOptionsDelete = {
        method: 'DELETE',
        headers: { 
            'Authorization': 'Token ' + token,
        },
    };

    window.onload = function visualize_data(){

        var user = localStorage.getItem('id_user');

        var img_default = "https://th.bing.com/th/id/OIP.u76n8EaazLkSDCzUbzFsUQHaHa?pid=ImgDet&rs=1";
        var url1 = "http://localhost:8000/api/v1/profile/user/"+user+"/";
        

        document.getElementById('done_btn').style.visibility = 'hidden';

        axios.get(url1,requestOptionsGet)
        .then((response) =>{
            if((response.data.url_img !== "/assets/undefined" && response.data.url_img !== null)){
                img_url = "http://localhost:8000" + response.data.url_img;
                document.getElementById('preview').src = img_url;
            }else{
                document.getElementById('preview').src = img_default;
            }
        })
        .catch((error)=>{
            document.getElementById('preview').src = img_default;
        })
        
        var url2 = "http://localhost:8000/api/v1/profile/update_user/"+user+"/";

        axios.get(url2,requestOptionsGet)
        .then((response) => {

            document.getElementById('username').textContent = response.data.username;
            document.getElementById('first_name').textContent = response.data.first_name;
            document.getElementById('last_name').textContent = response.data.last_name;
            document.getElementById('email').textContent = response.data.email;

        })
        .catch((error) => {
            console.log(error.response.data)
            alert("Error\n" + error.response.data);
        });
    };

    const consume_img =()=> {
 
        let postData = new FormData();
        postData.append('id_user', user);
        var img_valid = document.getElementById('img').files[0];
        postData.append('url_img', img_valid);

        var url = "http://localhost:8000/api/v1/profile/new_profile";

        if(img_valid!= null){
            axios.post(url, postData,requestOptionsPost)
            .then((response)=>{
                img_url = "http://localhost:8000"+response.data.url_img;
                document.getElementById('preview').src = img_url;
                window.location.reload();         
            })
            .catch((error)=>{
                if(error.response.data === "Error"){
                    put_urlImg();
                }
            })
        }else{
            alert("Inserte una imagen");
        }
    };

    const put_urlImg=()=>{

        let putData = new FormData();

        putData.append('id_user', user);
        putData.append('url_img', document.getElementById('img').files[0]);

        var url = "http://localhost:8000/api/v1/profile/user/"+user+"/";

        axios.put(url, putData,requestOptionsPut)
        .then((response) => {
                img_url = "http://localhost:8000"+response.data.url_img;
                document.getElementById('preview').src = img_url;
                window.location.reload();
            }
        )
        .catch((error)=>{
            console.log(error.response.data)
            alert("Error al actualizar imagen");
        })
        
    };

    const delete_img=()=>{

        var img_default = "https://th.bing.com/th/id/OIP.u76n8EaazLkSDCzUbzFsUQHaHa?pid=ImgDet&rs=1";

        var url = "http://localhost:8000/api/v1/profile/user/"+user+"/";

        axios.delete(url, requestOptionsDelete)
        .then((response) => {
        
            document.getElementById('preview').src = img_default;
            alert("Se elimino la imagen")
            window.location.reload();      
            }
        )
        .catch((error)=>{
            console.log(error.response.data)
            alert("Error al eliminar imagen");
        })
    };

    const logOut = () => {
        localStorage.clear();
        window.location="/Login";
    };

    const mod_User = () => {
        document.getElementById('done_btn').style.visibility = 'visible';
        document.getElementById('edit_btn').style.visibility = 'hidden';
        document.getElementById('update_btn').style.visibility = 'hidden';
        document.getElementById('logout_btn').style.visibility = 'hidden';
        document.getElementById('img').style.visibility = 'hidden';
        document.getElementById('upload_btn').style.visibility = 'hidden';
        document.getElementById('delete_btn').style.visibility = 'hidden';
        const username = document.getElementById('username');
        const name = document.getElementById('first_name');
        const name2 = document.getElementById('last_name');
        const email = document.getElementById('email');
        username.contentEditable=true;
        username.style.backgroundColor="#130c5f";
        name.contentEditable=true;
        name.style.backgroundColor="#160c5f";
        name2.contentEditable=true;
        name2.style.backgroundColor="#160c5f";
        email.contentEditable=true;
        email.style.backgroundColor="#160c5f";
    }

    const done_User = () => {
        document.getElementById('done_btn').style.visibility = 'hidden';
        document.getElementById('edit_btn').style.visibility = 'visible';
        document.getElementById('update_btn').style.visibility = 'visible';
        document.getElementById('logout_btn').style.visibility = 'visible';
        document.getElementById('img').style.visibility = 'visible';
        document.getElementById('upload_btn').style.visibility = 'visible';
        document.getElementById('delete_btn').style.visibility = 'visible';
        const username = document.getElementById('username');
        const name = document.getElementById('first_name');
        const name2 = document.getElementById('last_name');
        const email = document.getElementById('email');
        username.contentEditable = false;
        username.style.backgroundColor = "#FFFFFF00";
        name.contentEditable = false;
        name.style.backgroundColor = "#FFFFFF00";
        name2.contentEditable = false;
        name2.style.backgroundColor = "#FFFFFF00";
        email.contentEditable = false;
        email.style.backgroundColor = "#FFFFFF00";
    }

    const update_User = () => {

        var postData = {
            username:  document.getElementById('username').textContent,
            first_name:  document.getElementById('first_name').textContent,
            last_name:  document.getElementById('last_name').textContent,
            email:  document.getElementById('email').textContent
          }
        
        var url = "http://localhost:8000/api/v1/profile/update_user/" + user + "/"; 

        axios.put(url,postData, requestOptionsPut2)
        .then((response) => {
            alert("Perfil actualizado")
        })
        .catch((error) => {
            alert("Error al actualizar perfil\n" + error.response.data);
        });
    }


    return(
        <div>
            <section class="vh-100 gradient-custom">
                <button class="btn btn-danger"  id="logout_btn" type="submit" onClick={logOut}>
                <i class="glyphicon glyphicon-log-out" style={{'font-size':'20px'}}>
                </i>LogOut
                </button>
                <div class="container py-5 h-100 ">
                    <div class="row justify-content-center">
                        <div class="caja">
                            <div class="header">
                                <div class = "circular">
                                    <img id="preview" alt="error img"/> 
                                </div>
                            </div>
                        <div class= "descripcion">
                            <p  id="username" class= "user"></p>
                            <div class="row">
                                <div class="col-3 col-sm-6 mx-auto">
                                    <p id="first_name" class="name"></p>
                                </div>
                                <div class="col-3 col-sm-6" >
                                    <p  class="name" id="last_name" ></p>
                                </div>  
                            </div>
                            <p class= "email" id="email"></p>
                        </div>     
                        <div class="conf">
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center" role="group">
                                <button id="edit_btn" class="btn btn-outline-primary" type="submit" onClick={mod_User}>Modificar</button> 
                                <button id="done_btn" class="btn btn-outline-primary" type="submit" onClick={done_User}>Hecho</button>
                                <button id="update_btn" class="btn btn-outline-primary" type="submit" onClick={update_User}>Actualizar</button> 
                            </div>
                            <div class="input-group" style={{'margin-top':'50px'}}>
                                <input class="form-control" accept="image/png, image/jpeg" type="file" id="img"></input>

                                <button onClick={delete_img} id="delete_btn" class="btn btn-outline-danger" type="button">Delete</button>

                                <button id="upload_btn" class="btn btn-outline-primary" onClick={consume_img}>Upload</button> 
                            </div>
                        </div>         
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;