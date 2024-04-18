import './card.css';
import React from 'react';

interface CardProps {
  email: string;
  mobileNumber: string;
}

const Card: React.FC<CardProps> = ({ email, mobileNumber }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Reach out to us at:</h2>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile Number:</strong> {mobileNumber}</p>
      </div>
    </div>
  );
};

export default Card;