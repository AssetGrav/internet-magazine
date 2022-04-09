import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import TextField from "./textfild";
import { addToLocalBasket, localStorageBasket } from "./ui/localStorage";
import { validator } from "../../utils/validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoodInfo = ({ product, onClickGoodCard }) => {
    const [data, setData] = useState();
    const [errors, setErrors] = useState({});
    const notify = () => toast("Введите число");
    useEffect(() => {
        const count = { count: 1 };
        setData({ ...product, ...count });
    }, []);
    console.log("data", data);

    const validatorConfig = {
        count: {
            isCount: {
                message: "Count введен некорректно"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const onChangeQuantaty = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: Number(target.value)
        }));
        if (!Number(target.value)) {
            notify();
        }
        console.log("targ", Number(target.value));
    };

    function upgrate(data, count) {
        const indexOfElemInBasket = localStorageBasket.findIndex((elem) => elem._id === data._id);
        localStorageBasket[indexOfElemInBasket] = { ...data, ...{ count: count } };
        return localStorageBasket;
    };
    // валидирует, добавляет товар в корзину, обновляет кооличество товара
    const addProductToBasket = (product, count) => {
        const isValid = validate();
        console.log("valid", isValid);
        if (!isValid) return;
        let localBasket = localStorageBasket;
        if (!localBasket.find((elem) => elem._id === product._id)) {
            localBasket.push({ ...product, ...{ count: count } });
        } else if (localStorageBasket.find((elem) => elem._id === product._id)) {
            localBasket = upgrate(product, count);
        }
        addToLocalBasket(localBasket);
    };
    console.log(errors);
    if (data) {
        return (
            <div className="shadow rounded w-200 mt-3 mb-3">
                <div className="fluid">
                    <Row>
                        <Col>
                            <Image src={product.photo}
                            className="col-md-3 rounded card-info w-100 " height={150} alt="sunkiller" />
                        </Col>
                        <Col className="col-md-6 rounded pt-4">
                            <div className="">Наименование товара <span>{product.name}</span></div>
                            <div>id <span>{product._id}</span></div>
                            <div>Стоимость <span>{product.price}</span></div>
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
                                        type="number"
                                        name="count"
                                        placeholder="1"
                                        value={data.count}
                                        onChange={onChangeQuantaty}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-md-3">
                            <div className="pt-5">
                                <Button id={product._id} onClick={onClickGoodCard}>Открыть карточку</Button>
                            </div>
                            <div className="pt-2">
                                <Button
                                    d={product._id}
                                    onClick={() =>
                                        addProductToBasket(product, data.count)

                                    }
                                >
                                    в корзину
                                </Button>
                            </div>
                            <ToastContainer />
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
    product: PropTypes.object,
    onChangeQuantaty: PropTypes.func
};

export default GoodInfo;
