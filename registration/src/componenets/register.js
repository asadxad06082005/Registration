import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Register = () => {
    // useStates need to take and give new information
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault(e);
        axios.post("https://online-excel-heroku.herokuapp.com/auth/register", {
            fullName: fullName,
            username: userName,
            password: Password,
            phone: phone,
// axios post I take root objects and change with mine
        })
            .then((res) => {
                console.log(res, "error")
                if (res.data.data.success === true) {
                    navigate("/login")
                }else{
                    alert("Try again")
                }
            })
            .catch((err) => {
                console.log(err, "right")
            })
        // then catch need to navigate
    }
    return (
        <div>
            <form action="#">
            <input placeholder="Full Name" type="text" onChange={(e) => setFullName(e.target.value)} value={fullName}/>
            <input placeholder="User Name" type="text" onChange={(e) => setUserName(e.target.value)} value={userName}/>
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={Password}/>
            <input placeholder="Phone" type="phone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
            <button onClick={handleClick}>Click</button>
            </form>
        </div>
    );
};

export default Register;