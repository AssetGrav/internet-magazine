import React from "react";
import GoodsBasket from "../common/goodsBasket";
import SearchString from "../common/searchString";

const Basket = (params) => {
    return (
        <div className="container-sm w-auto mh-100 inline-block mt-5">
            <SearchString />
            <p>Корзина</p>
            <GoodsBasket />
        </div>
    );
};

export default Basket;
