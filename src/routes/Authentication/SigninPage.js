import React, {Component} from "react";

const initialState = {
    registerUsername:'',
    registerPassword:'',
}

class SigninPage extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    onUsernameChange = (event) => {
        this.setState({registerUsername: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSigninSubmit = () => {
        fetch("http://localhost:3500/login", {
            method: 'post',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username:this.state.registerUsername,
                password:this.state.registerPassword,
            })
        })
        .then(resp => resp.json())
        .then(user => {
            console.log(user)
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
                        <legend >Signin</legend>
                        <div >
                            <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                            <input onChange={this.onUsernameChange} type="text" name="name"  id="name"/>
                        </div>
                        <div>
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <button onClick={this.onSigninSubmit} type="submit" value="Register">Sign In</button>
                        </div>
                        <div className="lh-copy mt3">
                        <p>Don't have an account? <a href="http://localhost:3000/register">Register</a></p>
                        <p>Or <a href="http://localhost:3000/">Continue</a> without an account, mind that some funcionality may be limited.</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default SigninPage;