import React from "react";
import ItemSkeleton from "./ItemSkeleton";

const PageSkeleton = ({start_token}) => {
    return (
        <div>
            <div className="body_skeleton card_skeleton">
                <div className="top_portion">
                    <div>
                        <div className="content image"></div>
                        <div className="content title"></div>
                    </div>
                        <div class="content_links">
                            <div className="icons_container">
                                <p className="content icon"></p>
                                <p className="content icon"></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_portion">
                        <div>
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
                {Array(start_token + 20).fill({}).map((d, i) => (<ItemSkeleton key={i}/>))}
            </div>
        </div>
    )
}

export default PageSkeleton;