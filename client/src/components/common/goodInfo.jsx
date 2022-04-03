import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";

const GoodInfo = ({ good, onClickGoodCard }) => {
    return (
        <div className="shadow rounded w-200 mt-3 mb-3">
            <div className="fluid">
                <Row>
                    <Col>
                        <Image src={good.photo}
                        className="col-md-3 rounded card-info w-100 " height={150} alt="sunkiller" />
                    </Col>
                    <Col className="col-md-6 rounded pt-5">
                        <div className="">Наименование товара <span>{good.name}</span></div>
                        <div>id <span>{good._id}</span></div>
                        <div>Стоимость <span>{good.price}</span></div>
                    </Col>
                    <Col className="col-md-3">
                        <div className="pt-10">
                            <Button id={good._id} onClick={onClickGoodCard}>Открыть карточку</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

GoodInfo.propTypes = {
    onClickGoodCard: PropTypes.func,
    good: PropTypes.object
};

export default GoodInfo;
