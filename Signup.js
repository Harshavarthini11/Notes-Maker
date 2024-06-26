import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history("/");
            props.showAlert("Account Created Successfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
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

    const formGroupStyle = {
        marginBottom: '20px'
    };

    const labelStyle = {
        fontWeight: 'bold'
    };

    const formControlStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ced4da',
        borderRadius: '5px'
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
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
            <h2 style={h2Style}>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={formGroupStyle}>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input type="text" className="form-control" id="name" onChange={onChange} name="name" aria-describedby="emailHelp" placeholder="Enter name" style={formControlStyle} />
                </div>
                <div className="form-group" style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>Email address</label>
                    <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="Enter email" style={formControlStyle} />
                </div>
                <div className="form-group" style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required style={formControlStyle} />
                </div>
                <div className="form-group" style={formGroupStyle}>
                    <label htmlFor="cpassword" style={labelStyle}>Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" placeholder="Confirm Password" minLength={5} required style={formControlStyle} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>Submit</button>
            </form>
        </div>
    );
};

export default Signup;
