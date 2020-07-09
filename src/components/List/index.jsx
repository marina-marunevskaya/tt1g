import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Card } from '../Card';
import style from './style.css';

export const List = ({
    items,
    loadMore,
    moreAvailable
}) => {
    if (!items.length) {
        return (
            <Container>
                <p>Нет данных для отображения</p>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                {items.map(
                    ({
                        imdbID: id,
                        Poster: imageSrc,
                        Title: title,
                        Type: type
                    }) => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={2} className={style.column} key={id}>
                            <Card
                                imageAlt={`${type} '${title}'`}
                                imageSrc={imageSrc}
                                title={title}
                            />
                        </Col>
                    )
                )}
            </Row>
            {moreAvailable && (
                <Row>
                    <Button variant="primary" className={style.button} onClick={loadMore}>
                        Показать больше
                    </Button>
                </Row>
            )}
        </Container>
    );
};
