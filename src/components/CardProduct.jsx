import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';

export default function CardProduct({ item }) {
  return (
    <Card>
        <img
            alt="Sample"
            src={item.userId}
        />
        <CardBody>
            <CardTitle tag="h5">
            {item.id}
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            {item.id}
            </CardSubtitle>
            <CardText>
            {item.title}
            </CardText>
        </CardBody>
    </Card>
  )
}
