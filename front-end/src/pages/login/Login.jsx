import "./login.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/user/auth/login', {
            email: email,
            password: password
        }).then(response => {
            alert(response.data.name)
            navigate('/home')
        })
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={submitHandler}>
                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="loginInput" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}  className="loginInput" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
        </div>
    )
}
