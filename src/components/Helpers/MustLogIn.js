import React from "react";

const MustLogIn = () => {
    return(
        <div className="must_login_container">
        <h2>It seems like you are not logged in!!</h2>
        <p><a href="http://localhost:3000/login">Log In</a> or <a href="http://localhost:3000/register">Register</a> to add elements to the watchlist</p>
    </div>
    )
}

export default MustLogIn;