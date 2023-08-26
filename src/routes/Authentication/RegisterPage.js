import React, {Component} from "react";

const initialState = {
    registerUsername:'',
    registerEmail:'',
    registerPassword:'',
    registerConfirmation:'',
}

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    onUsernameChange = (event) => {
        this.setState({registerUsername: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }
    onConfirmationChange = (event) => {
        this.setState({registerConfirmation: event.target.value})
    }

    onRegisterSubmit = () => {
        fetch("http://localhost:3500/register", {
            method: 'post',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username:this.state.registerUsername,
                email:this.state.registerEmail,
                password:this.state.registerPassword,
                confirmation:this.state.registerConfirmation
            })
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
            }
        })
    }

    render() {
        return (
            <article>
                <main>
                    <div>
                        <fieldset id="sign_up">
                        <legend >Register</legend>
                        <div >
                            <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                            <input onChange={this.onUsernameChange} type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange}  type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} type="password" name="password"  id="password"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="confirm-password">Confirm Password</label>
                            <input onChange={this.onConfirmationChange} type="password" name="confirm-password"  id="confirm-password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <button onClick={this.onRegisterSubmit} type="submit" value="Register">Register</button>
                        </div>
                        <div className="lh-copy mt3">
                        <a href="http://localhost:3000/login">Sign In</a>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default RegisterPage;