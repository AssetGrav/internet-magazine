import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./goodInfo";

const GoodsList = ({ props, onClickGoodCard }) => {
    const listOfGoods = props;
    if (props !== undefined) {
        return (
            <div>
                {listOfGoods.map((elem) => <GoodInfo key={elem._id} good={elem} onClickGoodCard= {onClickGoodCard} />)}
            </div>
        );
    }
    return [];
};
GoodsList.propTypes = {
    props: PropTypes.array,
    onClickGoodCard: PropTypes.func
};

export default GoodsList;
