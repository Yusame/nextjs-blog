import styles from './alert.module.css';
import cn from 'classnames';
import React from 'react';

export default function Alert({ children, type }): React.ReactElement {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}