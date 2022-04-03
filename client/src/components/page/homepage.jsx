import React from "react";
import SearchString from "../common/searchString";
import BodySearch from "../common/bodySearch";

const Homepage = () => {
    return (
        <div className="container-sm w-auto mh-100 inline-block">
            <SearchString />
            <BodySearch />
        </div>
    );
};

export default Homepage;
