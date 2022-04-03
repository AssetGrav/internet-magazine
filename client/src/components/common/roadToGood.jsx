import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

const RoadToGoods = ({ good }) => {
    console.log(good);
    return (
        <div className="shadow rounded w-200 mt-3 mb-3 h-100 block">
            <Container border="primary">
                <Row>
                    <Col >{good.category + " > " + good.name}</Col>
                </Row>
            </Container>
        </div>
    );
};

RoadToGoods.propTypes = {
    good: PropTypes.object
};

export default RoadToGoods;
