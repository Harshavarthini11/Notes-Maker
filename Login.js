import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
        
            localStorage.setItem('token', json.authtoken);
            props.showAlert("LoggedIn Successfully", "success");
            history("/");
        } else {
            props.showAlert("Invalid Details", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const containerStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        opacity: '0.9', 
        backgroundColor:'black',
        color:'white',
        
    };

    const formLabelStyle = {
        fontWeight: 'bold'
    };

    const formControlStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '15px',
        border: '1px solid #ced4da',
        borderRadius: '5px'
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: '5',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3'
    };

    const h2Style = {
        marginBottom: '20px'
    };

    return (
        <div style={containerStyle}>
            <h2 style={h2Style}>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={formLabelStyle}>Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" style={formControlStyle} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={formLabelStyle}>Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" style={formControlStyle} />
                </div>
                <button type="submit" className="btn btn-primary" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>Submit</button>
            </form>
        </div>
    );
};

export default Login;
