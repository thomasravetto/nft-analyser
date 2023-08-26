import React, {Component} from "react";
import { getCurrentEndpoint } from "../../helpers";
import Navigation from "../../components/Navigation/Navigation";
import ItemOverview from "../../components/Item/ItemOverview";

const initialState = {
    item_info:{},
    metadata_info:[],
}

class ItemPage extends Component {
    constructor() {
        super()
        this.state = initialState;
    }

    fetchItem(address, item_id) {
        fetch("http://localhost:3500/" + address + "/" + item_id)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({item_info: data.item_info})
            this.setState({metadata_info: data.metadata_info})
        })
        .catch(err => console.error("Error fetching item data", err))
    }

    componentDidMount() {
        const [address, item_id] = getCurrentEndpoint(window.location.pathname)
        this.fetchItem(address, item_id);
    }

    render() {
        return(
            <div>
                <Navigation/>
                <ItemOverview item_info={this.state.item_info} metadata_info={this.state.metadata_info}/>
            </div>
        )
    }
}

export default ItemPage;