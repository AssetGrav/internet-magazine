import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const PriceSort = (params) => {
    return (
        <div className="shadow rounded w-auto mt-3 ">
            <div className="fluid flex-inline">
                <Row>
                    <Col sm={6}>
                        <Form.Select aria-label="Default select example">
                            <option>Выберите ценовой диапазон</option>
                            <option value="1">до 5 000 тг</option>
                            <option value="2">до 20 000 тг</option>
                            <option value="3">свыше 20 000 тг</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PriceSort;
