import React from "react";
import SearchItem from "./SearchItem";

const CollectionsOptions = ({ collections }) => {
    return (
        <div className="collections_options_navigation">
            {
                collections.map((item, i) => {
                    return (
                        <SearchItem key={collections[i].id}
                        image_url={collections[i].image_url}
                        collection_name={collections[i].title}
                        slug={collections[i].slug}
                        />
                    )
                })
            }
        </div>
    )
}

export default CollectionsOptions;