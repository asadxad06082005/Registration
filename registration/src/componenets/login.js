import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const login = (e) => {
        e.preventDefault()
        axios.post("https://online-excel-heroku.herokuapp.com/auth/token" , {
            username: userName,
            password: password,
        })
            // axios post I take root objects and change with mine

            .then((res) => {
                console.log(res, "Try pls")
                if (res.data.data.success === true) {
                    navigate("/home")
                }else{
                    alert("Try Again")
                }
            })
            .catch((err) => {
                console.log(err, "Good")
            })
        // then catch need to navigate
    }

    return (
        <div>
            Login
            <input placeholder="UserName" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input placeholder="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={login} > Click </button>
        </div>
    );
};

export default Login;