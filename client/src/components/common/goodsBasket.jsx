import React from "react";
import { Button, Col, Image, Row, Table } from "react-bootstrap";
import { PropTypes } from "prop-types";

const GoodsBasket = () => {
    return (
        <div className="shadow rounded w-200 mt-3 mb-3">
            <div className="fluid">
                <Row>
                    <Col className="col-md-9">
                        <Row className="m-1">
                            <Col className="col-md-2 rounded">
                                <Image height={100} src="https://volosomagia.ru/wp-content/uploads/2013/03/2-3.jpg"
                                    className="card-info w-100 " alt="sunkiller" />
                            </Col>
                            <Col className="col-md-10 pt-3">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                        <th>№</th>
                                        <th>Наименование</th>
                                        <th>Количество</th>
                                        <th>Стоимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-md-3">
                        <div>Итого</div>
                        <div className="mt-5 pt-5 mb-5">
                            <Button variant="outline-primary" size="lg" >купить</Button>
                        </div>
                        <div className="align-bottom">id:<span></span></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

GoodsBasket.propTypes = {
    onClickBuy: PropTypes.func,
    good: PropTypes.object
};

export default GoodsBasket;
