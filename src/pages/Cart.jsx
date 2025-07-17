import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, clearCart } from '../features/cart/cartSlice';
import { addOrder } from '../features/orders/ordersSlice';
import { showNotification } from '../features/ui/uiSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tenantId = useSelector(state => state.auth.tenantId);

  // Safely select the cart, providing a default empty cart object.
  // This prevents crashes if the tenant's cart hasn't been created yet.
  const cart = useSelector(state => 
    (state.cart.byTenant && state.cart.byTenant[tenantId]) 
    || { items: [], total: 0 }
  );

  const handleCheckout = () => {
    const order = {
      id: new Date().toISOString(),
      items: cart.items,
      total: cart.total,
      date: new Date().toLocaleDateString(),
    };
    dispatch(addOrder({ tenantId, order }));
    dispatch(clearCart({ tenantId }));
    dispatch(showNotification({ message: 'Order placed successfully!', type: 'success' }));
    navigate('/orders');
  };

  if (cart.items.length === 0) {
    return <div className={styles.container}><p>Your cart is empty.</p></div>;
  }

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            <span className={styles.itemName}>{item.title}</span>
            <div className={styles.quantityControls}>
              <button onClick={() => dispatch(decreaseQuantity({ tenantId, itemId: item.id }))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity({ tenantId, itemId: item.id }))}>+</button>
            </div>
            <span className={styles.price}>₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>Total: ₹{cart.total}</div>
      <button onClick={handleCheckout} className={styles.checkoutButton}>Checkout</button>
    </div>
  );
};

export default Cart;
