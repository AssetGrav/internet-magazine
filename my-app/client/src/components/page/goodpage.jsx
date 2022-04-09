import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakeApi from "../../api/fake-api";
import GoodCard from "../common/goodCard";
import RoadToGoods from "../common/roadToGood";
import SearchString from "../common/searchString";

const Goodpage = () => {
    const { goodId } = useParams();
    const [state, setState] = useState({});
    useEffect(() => {
        fakeApi.getById(goodId).then((res) => setState(res));
    }, []);
    return (
        <div className="container-sm w-auto mh-100 inline-block mt-5">
           <SearchString />
           <RoadToGoods good={state} />
           <GoodCard good={state} />
        </div>
    );
};

export default Goodpage;
