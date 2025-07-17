import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../../features/ui/uiSlice';
import styles from './Notification.module.css';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 3000); // Notification disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  if (!notification) {
    return null;
  }

  return (
    <div className={`${styles.notification} ${styles[notification.type]}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
