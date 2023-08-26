import React from "react";

const ItemOverview = ({item_info, metadata_info}) => {
    return (
        <div>
            <div>
                <img className="item_info_image" alt="nft" src={item_info.image_url}></img>
                <h3 className="item_info_name">{item_info.item_name}</h3>
                <p className="item_info_description">{item_info.description}</p>
            </div>
            <div className="metadata_info_container">
                {
                    metadata_info.map((item, i) => {
                        return (
                            <div className="metadata_item_card">
                                <h3>{metadata_info[i].value}</h3>
                                <p>{metadata_info[i].trait}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemOverview;