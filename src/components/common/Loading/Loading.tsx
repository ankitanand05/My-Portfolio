import React from 'react';
import styles from './Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
        <div className={styles.spinner}></div>
        <h2 className={styles.loadingText}>Loading Portfolio...</h2>
      </div>
    </div>
  );
};

export default Loading;