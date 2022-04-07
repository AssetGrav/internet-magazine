import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./goodInfo";

const GoodsList = ({ goods, onClickGoodCard, onChangeQuantaty, onClickGoodToBasket }) => {
    if (goods !== undefined) {
        return (
            <div>
                {goods.map((elem) =>
                    <GoodInfo
                        key={elem._id}
                        good={elem}
                        onClickGoodCard={onClickGoodCard}
                        onChangeQuantaty={onChangeQuantaty}
                        onClickGoodToBasket={onClickGoodToBasket}
                    />)
                }
            </div>
        );
    }
    return [];
};
GoodsList.propTypes = {
    goods: PropTypes.array,
    onClickGoodCard: PropTypes.func,
    onChangeQuantaty: PropTypes.func,
    onClickGoodToBasket: PropTypes.func,
    valueQuantaty: PropTypes.number
};

export default GoodsList;
