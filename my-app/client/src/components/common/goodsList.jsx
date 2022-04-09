import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./goodInfo";

const GoodsList = ({ products, onClickGoodCard, onChangeQuantaty }) => {
    if (products !== undefined) {
        return (
            <div>
                {products.map((elem) =>
                    <GoodInfo
                        key={elem._id}
                        product={elem}
                        onClickGoodCard={onClickGoodCard}
                        onChangeQuantaty={onChangeQuantaty}
                    />)
                }
            </div>
        );
    }
    return [];
};
GoodsList.propTypes = {
    products: PropTypes.array,
    onClickGoodCard: PropTypes.func,
    onChangeQuantaty: PropTypes.func,
    onClickGoodToBasket: PropTypes.func,
    valueQuantaty: PropTypes.number
};

export default GoodsList;
