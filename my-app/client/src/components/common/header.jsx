import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const Header = (params) => {
    return (
        <div className="shadow rounded w-auto">
            <Container className="fluid">
                <Row >
                    <Col sm={10}>
                        <img src="https://fitomarket.com.ua/image/cache/catalog/new2/novosti/koreja-400x300.jpg"
                        className="col-md-2 img-fluid rounded " style={{ maxWidth: "10rem" }}
                        alt="logo" />
                    </Col>
                    <Col sm={2} >
                        <Breadcrumb className="mx-auto mt-5">
                            <Breadcrumb.Item href="#">Вход</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Регистрация</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
