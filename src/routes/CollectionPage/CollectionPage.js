import React, {Component} from "react";
import Navigation from "../../components/Navigation/Navigation";
import CollectionOverview from "../../components/Collection/CollectionOverview";
import PageSkeleton from "../../components/Collection/skeleton/PageSkeleton";
import { getCurrentEndpoint } from "../../helpers";

let initialState = {
    collection_info: {},
    collection_items: [],
    collection_slug: '',
    start_token:0,
}

const updateStartToken = (start_token) => {
    start_token += 20;
    return start_token;
}


class CollectionPage extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.fetchingData = false;
    }

    handleScroll = () => {
        if (!this.fetchingData) {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
                return
            }
            console.log("ciao")
            this.fetchCollection(this.state.collection_slug, this.state.start_token)
        }
        return
    }

    fetchCollection = async (slug, start_token) => {
        if (this.fetchingData) {
            return
        }

        this.fetchingData = true;

        try {
            const resp = await fetch("http://localhost:3500/collection/" + slug + "/" + start_token)
            const data = await resp.json()

            console.log(JSON.stringify(this.state.collection_items).includes(JSON.stringify(data.items_info)))

            if (!JSON.stringify(this.state.collection_items).includes(JSON.stringify(data.items_info))) {
                this.setState(prevState => ({
                collection_info: data.collection_info,
                collection_items: prevState.collection_items.concat(data.items_info),
                collection_slug:prevState.collection_slug,
                start_token: updateStartToken(prevState.start_token)
              }));
            }
            } catch (error) {
                console.error("Error fetching collection data", error)
            } finally {
                this.fetchingData = false;
            }
    }

    componentDidMount() {
        const slug = getCurrentEndpoint(window.location.pathname)[1]
        this.setState({ collection_slug: slug }, () => {
            this.fetchCollection(slug, this.state.start_token);
        });
        window.addEventListener('scroll', this.handleScroll);
        return () => window.removeEventListener('scroll', this.handleScroll);
    }

    isCollectionInWatchlist = async (collection) => {
            const resp = await fetch("http://localhost:3500/is-collection-in-watchlist", {
                method:'post',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    username: this.props.username,
                    collection_address: collection
                })
            })
            const data = await resp.json()
            return data;
        }

    render() {
        return (
            <div>
                <Navigation/>
                {this.state.collection_info && this.state.collection_items.length
                ? <CollectionOverview collection_info={this.state.collection_info} fetchCollection={this.fetchCollection} collection_items={this.state.collection_items} addCollectionToWatchlist={this.props.addCollectionToWatchlist} removeCollectionFromWatchlist={this.props.removeCollectionFromWatchlist} isCollectionInWatchlist={this.isCollectionInWatchlist} start_token={this.state.start_token}/>
                : <PageSkeleton key={this.state.start_token} start_token={this.state.start_token}/>
                }
            </div>
        )
    }
}

export default CollectionPage;