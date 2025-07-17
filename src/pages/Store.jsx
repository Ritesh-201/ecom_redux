import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './Store.module.css';
import { addItem } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';

const Store = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const tenantId = useSelector(state => state.auth.tenantId);

  const handleAddToCart = (product) => {
    dispatch(addItem({ tenantId, item: product }));
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className={styles.container}>
      <h2>Our Store</h2>
      <p>Browse products and add them to your cart!</p>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => handleAddToCart(product)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
