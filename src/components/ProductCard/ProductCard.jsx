import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className={styles.image} loading="lazy" />
        <h3 className={styles.name}>{product.title}</h3>
        <p className={styles.price}>₹{product.price}</p>
      </Link>
      <button onClick={onAddToCart} className={styles.addButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
