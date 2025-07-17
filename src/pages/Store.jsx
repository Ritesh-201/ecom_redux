import products from '../features/cart/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const Store = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 600, margin: '0 auto', textAlign: 'center', background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(44,62,80,0.06)' }}>
      <h2>Our Store</h2>
      <p>Browse products and add them to your cart!</p>
      <ul style={{ padding: 0, listStyle: 'none', margin: '2rem 0' }}>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f7f8fa', borderRadius: 6, padding: '0.7rem 1rem' }}>
            <span>{product.name} <span style={{ color: '#38b2ac', fontWeight: 500 }}>₹{product.price}</span></span>
            <button onClick={() => dispatch(addItem(product))} style={{ background: '#fff', color: '#2d3748', border: '1px solid #e2e8f0', borderRadius: 4, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
