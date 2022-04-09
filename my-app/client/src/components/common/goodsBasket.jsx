import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row, Table } from "react-bootstrap";
import { PropTypes } from "prop-types";
import TextField from "./textfild";

const GoodsBasket = () => {
    const [goodsInBasket, setGoodsInBasket] = useState([]);
    useEffect(() => {
        setGoodsInBasket(JSON.parse(localStorage.getItem("basket")));
    }, []);
    console.log("goodsInBasket", goodsInBasket);
    return (
        <div className="shadow rounded w-200 mt-3 mb-3">
            <div className="fluid">
                <Row>
                    <Col className="col-md-9">
                        {goodsInBasket !== []
                            ? goodsInBasket.map((elem) => (
                                <Row key={elem._id} className="m-1">
                                    <Col className="col-md-2 rounded pt-3">
                                        <Image height={100} src={elem.photo}
                                            className="card-info w-100 " alt="sunkiller" />
                                    </Col>
                                    <Col className="col-md-10 pt-3">
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                <th className="col-md-7">Наименование</th>
                                                <th>Количество</th>
                                                <th>Стоимость</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>{elem.name}</td>
                                                <td><TextField /></td>
                                                <td>{elem.price}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            ))
                            : "Наполните корзину"
                        }
                    </Col>
                    <Col className="col-md-3">
                        <div>Итого</div>
                        <div className="mt-5 pt-5 mb-5">
                            <Button variant="outline-primary" size="lg" >Оформить заказ</Button>
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
