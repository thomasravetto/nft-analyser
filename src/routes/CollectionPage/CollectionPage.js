import React, {Component} from "react";
import Navigation from "../../components/Navigation/Navigation";
import CollectionOverview from "../../components/Collection/CollectionOverview";
import { getCurrentEndpoint } from "../../helpers";

const initialState = {
    collection_info: {},
    collection_items: [],
    collection_slug: '',
    start_token:0
}

const updateStartToken = (start_token) => {
    start_token += 20;
    return start_token;
}


class CollectionPage extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    fetchCollection(slug, start_token) {
        fetch("http://localhost:3500/collection/" + slug + "/" + start_token)
        .then(resp => resp.json())
        .then(data => {
            this.setState({collection_info: data.collection_info})
            this.setState({collection_items: data.items_info})})
        .catch(err => console.error("Error fetching collection data", err))
        this.setState({start_token: updateStartToken(this.state.start_token)})
    }

    componentDidMount() {
        const slug = getCurrentEndpoint(window.location.pathname)[1]
        this.setState({ collection_slug: slug }, () => {
            this.fetchCollection(slug, this.state.start_token);
        });
    }

    render() {
        return (
            <div>
                <Navigation/>
                <CollectionOverview collection_info={this.state.collection_info} collection_items={this.state.collection_items} addCollectionToWatchlist={this.props.addCollectionToWatchlist}/>
            </div>
        )
    }
}

export default CollectionPage;