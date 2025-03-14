import React from 'react';

import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
