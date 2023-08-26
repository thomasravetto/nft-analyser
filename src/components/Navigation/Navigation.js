import React,{Component} from "react";
import CollectionsOptions from "./CollectionsOptions";
import SearchInput from "./SearchInput";

const initialState = {
    collections: [],
    searchField:'',
    showCollectionsOptions: false,
}

class Navigation extends Component {
    constructor() {
        super()
        this.state = initialState;
    }

    componentDidMount() {
        fetch("http://localhost:3500/fetch-collections")
        .then(resp => resp.json())
        .then(data => this.setState({collections:data}))
        .catch(err => console.error("Error fetching collection data", err))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    toggleCollectionsOptions = () => {
        this.setState(prevState => ({showCollectionsOptions: !prevState.showCollectionsOptions}))
    }

    onClickLogout = () => {
        sessionStorage.clear();
      }

    render() {
        const {collections, searchField} = this.state;
        const filteredCollections = collections.filter(collections => {
            return collections.title.toLowerCase().includes(searchField.toLowerCase())
        });
        return (
            <div>
                <nav className="navigation_bar">
                    <a href="/" className="title_navigation"><h2 className="title_navigation">NFT Analyser</h2></a>
                    <SearchInput className="search_input_navigation"
                        searchChange={this.onSearchChange}
                        toggleCollectionsOptions={this.toggleCollectionsOptions}/>
                    {this.state.showCollectionsOptions && (
                        <CollectionsOptions collections={filteredCollections}/>
                    )}
                    <img alt="profile pic" className="profile_pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                    <a href="http://localhost:3000/login" onClick={this.onClickLogout}>Log Out</a>
                </nav>
            </div>
        )
    }
}

export default Navigation;
