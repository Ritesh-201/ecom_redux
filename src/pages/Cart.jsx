import CartList from '../features/cart/CartList';

const Cart = () => {
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 600, margin: '0 auto', textAlign: 'center', background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(44,62,80,0.06)' }}>
      <h2>Your Cart</h2>
      <CartList />
    </div>
  );
};

export default Cart;
