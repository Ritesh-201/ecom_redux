import { useSelector } from 'react-redux';
import styles from './OrderHistory.module.css';

const OrderHistory = () => {
  const tenantId = useSelector(state => state.auth.tenantId);
  const orders = useSelector(state => state.orders.byTenant[tenantId] || []);

  if (orders.length === 0) {
    return <div className={styles.container}><p>You have no past orders.</p></div>;
  }

  return (
    <div className={styles.container}>
      <h2>Order History</h2>
      {orders.map(order => (
        <div key={order.id} className={styles.order}>
          <div className={styles.orderDetails}>
            <h3>Order #{order.id.slice(-6)}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.total}</p>
          </div>
          <ul className={styles.itemList}>
            {order.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
