import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import fakeApi from "../../api/fake-api";
import Category from "./category";
import GoodsList from "./goodsList";
import PriceSort from "./priceSort";

const BodySearch = (params) => {
    const history = useHistory();
    const [productsState, setProductsState] = useState();
    useEffect(() => {
        fakeApi.fetchAll().then((res) => setProductsState(res));
    }, []);
    const handleClickCard = (e) => {
        history.push(`/goods/${e.target.id}`);
    };

    return (
        <div className="shadow rounded w-200 mt-3 mb-3 h-100 block">
             <Container className="fluid">
                <Row className="shadow rounded w-auto mt-3 pb-3 ">
                    <Col sm={3}>
                        <Category />
                    </Col>
                    <Col sm={9}>
                        <Row>
                            <Col sm={12}>
                                <PriceSort />
                            </Col>
                            <Col>
                                <GoodsList
                                    products={productsState}
                                    onClickGoodCard={handleClickCard}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BodySearch;
