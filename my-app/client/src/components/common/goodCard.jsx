import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { useHistory } from "react-router-dom";

const GoodCard = ({ good }) => {
    const history = useHistory();
    const handleClickBuy = () => {
        history.push("/basket");
    };
    return (
        <div className="shadow rounded w-200 mt-3 mb-3">
            <div className="fluid">
                <Row>
                    <Col>
                        <Image src={good.photo}
                        className="col-md-4 rounded card-info w-100 " height={400} alt="sunkiller" />
                    </Col>
                    <Col className="col-md-5 rounded pt-5">
                        <div className="fs-4">Наименование </div>
                        <p>{good.name}</p>
                        <div className="fs-4">Количество<span> {good.quantity + " " + good.unit}</span></div>
                        <div className="fs-4">Стоимость <span> {good.price + " " + "руб"}</span></div>
                    </Col>
                    <Col className="col-md-3 pt-10">
                        <div className="mt-5 pt-5 mb-5">
                            <Button variant="outline-primary" size="lg" id={good._id} onClick={handleClickBuy}>купить</Button>
                        </div>
                        <div className="align-bottom">id:<span>{good._id}</span></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

GoodCard.propTypes = {
    onClickBuy: PropTypes.func,
    good: PropTypes.object
};

export default GoodCard;
