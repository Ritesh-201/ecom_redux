import styles from './Tooltip.module.css';
import { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.tooltipWrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className={styles.tooltip}>{text}</span>}
    </span>
  );
};

export default Tooltip;
