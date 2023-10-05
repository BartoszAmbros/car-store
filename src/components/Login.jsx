import React from 'react'

function Login() {
    return (
        <div className="login-component">
            <div className="login-content">
                <h2>Store Login</h2>
                <form >
                    <p>Login</p>
                    <input type="text" name="login" placeholder='Login' />
                    <p>Password</p>
                    <input type="password" name="password" placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;