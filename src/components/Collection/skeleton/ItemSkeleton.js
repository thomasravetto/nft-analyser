import React from "react";

const ItemSkeleton = () => {
    return (
        <div>
            <div class="col-sm-6 col-md-3">
                <div class="movie--isloading">
                    <div class="loading-image"></div>
                        <div class="loading-content">
                            <div class="loading-text-container">
                            <div class="loading-main-text"></div>
                        <div class="loading-sub-text"></div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemSkeleton;