import React from "react";
import ItemSkeleton from "./ItemSkeleton";

const PageSkeleton = () => {
    return (
        <div>
            <div className="body card">
                <div className="top_portion">
                    <div class="content image"></div>
                        <div class="content_links">
                            <div className="icons_container">
                                <p className="content icon"></p>
                                <p className="content icon"></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_portion">
                        <div className="description">
                            <p className="content text"></p>
                            <p className="content text"></p>
                            <p className="content text"></p>
                        </div>
                    <div className="info_metadata">
                        <p className="content metadata"></p>
                        <p className="content metadata"></p>
                        <p className="content metadata"></p>
                    </div>
                </div>
            </div>
            <div className="item_skeleton_container">
                {Array(20).fill({}).map((d, i) => (<ItemSkeleton key={i}/>))}
            </div>
        </div>
    )
}

export default PageSkeleton;