import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLoginClickAction,
    onLogOutAction
} from '../state/auth'
import LoginByEmailAndPassword from './LoginByEmailAndPassword'
import { onLogInByGoogleClickHandler } from '../state/logInGoogleAuth'

const Auth = (props) => (
    props._user ?
        <div>
            <RaisedButton onClick={props._onLogOutAction}
            >
                LOG OUT
    </RaisedButton>
            {props.children}
        </div>
        :
        <div>
            <LoginByEmailAndPassword
                emailValue={props._emailValue}
                onEmailChange={props._onEmailChange}
                passwordValue={props._passwordValue}
                onPasswordChange={props._onPasswordChange}
                onLoginClick={props._onLoginClick}
            />
            <RaisedButton
                label="Login by google"
                primary={true}
                onClick={props._onLogInByGoogleClickHandler}
            />
        </div>

)
const mapStateToProps = state => ({
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password,
    _user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
    _onLoginClick: () => dispatch(onLoginClickAction()),
    _onLogOutAction: () => dispatch(onLogOutAction()),

    _onLogInByGoogleClickHandler: () => dispatch(onLogInByGoogleClickHandler()),
})



export default connect(mapStateToProps,
    mapDispatchToProps)(Auth)