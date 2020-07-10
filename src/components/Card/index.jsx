import React from 'react';
import RBCard from 'react-bootstrap/Card';

import style from './style.css';

const IMAGE_UNAVAILABLE = 'N/A';

export const Card = ({
    imageAlt,
    imageSrc,
    title
}) => (
    <RBCard className={style.card}>
        {(imageSrc && imageSrc !== IMAGE_UNAVAILABLE) && (
            <RBCard.Img
                variant="top"
                alt={imageAlt}
                className={style.image}
                src={imageSrc}
            />
        )}
        <RBCard.Body>
            <RBCard.Title>{title}</RBCard.Title>
        </RBCard.Body>
    </RBCard>
);
