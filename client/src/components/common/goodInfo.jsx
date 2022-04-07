import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import TextField from "./textfild";
import { addToLocalBasket, localBasket } from "./ui/localStorage";

const GoodInfo = ({ good, onClickGoodCard }) => {
    const [basket, setBasket] = useState(localBasket);
    const [data, setData] = useState();
    useEffect(() => {
        setData(good);
    }, []);
    console.log("data", data);
    const onChangeQuantaty = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: Number(target.value)
        }));
    };

    function addBasketQuantaty(object, num) {
        const newObject = {
            ...object,
            ...num
        };
        return newObject;
    };

    function upgrate(data) {
        const localBasket = JSON.parse(localStorage.getItem("basket"));
        const indexOfElemInBasket = localBasket.findIndex((elem) => elem._id === data._id);
        localBasket[indexOfElemInBasket] = data;
        return localBasket;
    };

    const putGoodToBasket = (obj, num) => {
        const addedGood = addBasketQuantaty(obj, num);
        if (!basket.find((elem) => elem._id === obj._id)) {
            setBasket((prevState) => ([
                ...prevState,
                addedGood
            ]));
        } else if (basket.find((elem) => elem._id === obj._id)) {
            setBasket(upgrate(addedGood));
        }
    };

    useEffect(() => {
        addToLocalBasket(basket);
    }, [basket]);

    if (data) {
        return (
            <div className="shadow rounded w-200 mt-3 mb-3">
                <div className="fluid">
                    <Row>
                        <Col>
                            <Image src={good.photo}
                            className="col-md-3 rounded card-info w-100 " height={150} alt="sunkiller" />
                        </Col>
                        <Col className="col-md-6 rounded pt-4">
                            <div className="">Наименование товара <span>{good.name}</span></div>
                            <div>id <span>{good._id}</span></div>
                            <div>Стоимость <span>{good.price}</span></div>
                            <Row>
                                <Col>
                                    <div className="mt-2">
                                        Количество
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mt-2 max-width-20">
                                        10
                                    </div>
                                </Col>
                                <Col>
                                    <TextField
                                        type="quantaty"
                                        name="baskQuantaty"
                                        value={data.baskQuantaty === undefined ? 1 : data.baskQuantaty}
                                        onChange={onChangeQuantaty}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-md-3">
                            <div className="pt-5">
                                <Button id={good._id} onClick={onClickGoodCard}>Открыть карточку</Button>
                            </div>
                            <div className="pt-2">
                                <Button
                                    d={good._id}
                                    onClick={() => putGoodToBasket(good, data)}
                                >
                                    в корзину
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else {
        return "";
    }
};

GoodInfo.propTypes = {
    onClickGoodCard: PropTypes.func,
    onClickGoodToBasket: PropTypes.func,
    good: PropTypes.object,
    onChangeQuantaty: PropTypes.func
};

export default GoodInfo;
