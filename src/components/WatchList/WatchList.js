import React from "react";
import WatchItem from "./WatchItem";

const WatchList = ({ watchlist }) => {
    return (
        <div  className="watchlist_container">
            {
                watchlist.map((item, i) => {
                    return (
                        <WatchItem
                        key={watchlist[i].slug}
                        image_url={watchlist[i].image_url}
                        collection_name={watchlist[i].collection_name}
                        floor_price={watchlist[i].floor_price}
                        owners={watchlist[i].owners}
                        slug={watchlist[i].slug}
                        />
                    )
                })
            }
        </div>
    )
}

export default WatchList;