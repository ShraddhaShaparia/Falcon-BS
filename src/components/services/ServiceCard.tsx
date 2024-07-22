import React from "react";
import { Card } from "react-bootstrap";
import "./serviceCard.css";

interface CardProps {
  imageUrl: string;
  caption: string;
  description: string;
}

const ServiceCard: React.FC<CardProps> = ({
  imageUrl,
  caption,
  description,
}) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt="Card image"
        className="card-img-top"
      />
      <div>
        <Card.Title className="caption">{caption}</Card.Title>
        <Card.Body className="overlay-content">
          <Card.Text className="overlay">{description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ServiceCard;
