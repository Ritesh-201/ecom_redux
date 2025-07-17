import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './cartSlice';

const CartList = () => {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <ul style={{ padding: 0, listStyle: 'none', marginBottom: '1rem' }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f7f8fa', borderRadius: 6, padding: '0.7rem 1rem' }}>
            <span>{item.name} <span style={{ color: '#38b2ac', fontWeight: 500 }}>₹{item.price}</span></span>
            <button onClick={() => dispatch(removeItem(item.id))} style={{ background: '#fff', color: '#e53e3e', border: '1px solid #e2e8f0', borderRadius: 4, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Remove</button>
          </li>
        ))}
      </ul>
      <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Total: ₹{total}</div>
      <button onClick={() => dispatch(clearCart())} style={{ background: '#fff', color: '#2d3748', border: '1px solid #e2e8f0', borderRadius: 4, padding: '0.5rem 1.2rem', cursor: 'pointer' }}>Clear Cart</button>
    </div>
  );
};

export default CartList;
