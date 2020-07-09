import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import style from './style.css';

export const Search = ({
    disabled,
    onChange,
    onClick,
    value
}) => (
    <Container>
        <Form className={style.form}>
            <Form.Group controlId="searchField">
                <Form.Row>
                    <Col>
                        <Form.Label>Поиск</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={12} sm={8} md={9} className={style.column}>
                        <Form.Control
                            type="text"
                            disabled={disabled}
                            onChange={
                                (event) => onChange(event.target.value)
                            }
                            value={value}
                        />
                    </Col>
                    <Col xs={12} sm={4} md={3} className={`${style.column} ${style['column--button']}`}>
                        <Button variant="primary" disabled={disabled} onClick={onClick}>
                            Выполнить поиск
                        </Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        </Form>
    </Container>
);
