import React from 'react';

import RBCard from 'react-bootstrap/Card';
import style from './style.css';

export const Card = ({
    imageAlt,
    imageSrc,
    title
}) => (
    <RBCard className={style.card}>
        <RBCard.Img
            variant="top"
            alt={imageAlt}
            className={style.image}
            src={imageSrc}
        />
        <RBCard.Body>
            <RBCard.Title>{title}</RBCard.Title>
        </RBCard.Body>
    </RBCard>
);
