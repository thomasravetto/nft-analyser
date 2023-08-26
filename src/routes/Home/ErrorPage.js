import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="error_page">
            <h1>Oops</h1>
            <p>An unexpected error has occurred!</p>
            <p>
                <i>{error.status} - {error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;
