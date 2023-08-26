import React, {Component} from "react";
import Navigation from "../../components/Navigation/Navigation";
import WatchList from "../../components/WatchList/WatchList";
import MustLogIn from "../../components/Helpers/MustLogIn";
import Loader from "../../components/Helpers/Loader";

const initialState = {
    watchlist: [],
    isLoggedIn: false,
}

class HomePage extends Component{
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.setState({isLoggedIn:this.props.isLoggedIn})
            fetch("http://localhost:3500/fetch-watchlist", {
                method:'post',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    username:this.props.username
                })
            })
            .then(resp => resp.json())
            .then(data => this.setState({watchlist:data}))
        }
    }

    render() {
        return (
            <div>
            <Navigation/>
                <div className="container">
                <div className='watchlist_title'>
                    <h1>WatchList</h1>
                </div>
                <div>
                    {this.state.isLoggedIn
                    ? this.state.watchlist.length
                        ?  this.state.watchlist !== "watchlist_empty"
                            ? <WatchList className="watchlist_container" watchlist={this.state.watchlist}/>
                            : <div>Your watchlist is empty</div>
                        : <Loader/>
                    : <MustLogIn/>}
                </div>
                </div>
            </div>
            );
        }
}

export default HomePage;