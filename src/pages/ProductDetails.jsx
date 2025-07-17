import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => 
    state.products.items.find(p => p.id === parseInt(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.price}>₹{product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <button onClick={() => dispatch(addItem(product))} className={styles.addButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
