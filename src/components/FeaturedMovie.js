import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {
    return (
        <section className="feature">
            <div>
                {item.original_name}
            </div>
        </section>
    )
}