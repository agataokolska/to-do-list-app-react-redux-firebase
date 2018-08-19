import React from 'react'


const LoginByEmailAndPassword = (props) => (

    <div>
        <div>
            <input type="email" 
            value={props.emailValue}
            onChange={props.onEmailChange}
            />
        </div>
        <div>
            <input type="password" 
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            />
        </div>
        <div>
            <button
            onClick={props.onLoginClick}>
                LOGIN!
            </button>
        </div>
    </div>
)


export default LoginByEmailAndPassword