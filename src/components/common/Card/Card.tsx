import React from 'react';
import { CardProps } from '../../../types';
import styles from './Card.module.css';

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const cardClasses = [
    styles.card,
    hover ? styles.hover : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;