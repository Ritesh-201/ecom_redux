import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './Store.module.css';
import { addItem } from '../features/cart/cartSlice';
import { fetchProducts } from '../features/products/productsSlice';
import toast from 'react-hot-toast';

const Store = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const productStatus = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);
  const totalProducts = useSelector(state => state.products.total);
  const currentLimit = useSelector(state => state.products.limit);
  const currentSkip = useSelector(state => state.products.skip);
  const tenantId = useSelector(state => state.auth.tenantId);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts({ limit: currentLimit, skip: currentSkip }));
    }
  }, [productStatus, currentLimit, currentSkip, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItem({ tenantId, item: product }));
    toast.success(`${product.title} added to cart`);
  };

  const handleLoadMore = useCallback(() => {
    // Calculate the next skip value based on the current number of loaded products
    const nextSkip = products.length;
    dispatch(fetchProducts({ limit: currentLimit, skip: nextSkip }));
  }, [dispatch, products.length, currentLimit]);

  let content;

  if (productStatus === 'loading' && products.length === 0) {
    content = <p>Loading products...</p>;
  } else if (productStatus === 'failed') {
    content = <p>Error: {error}</p>;
  } else {
    content = (
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => handleAddToCart(product)} 
          />
        ))}
      </div>
    );
  }

  const hasMoreProducts = products.length < totalProducts;

  return (
    <div className={styles.container}>
      <h2>Our Store</h2>
      <p>dil khol kr kharch kre...</p>
      {content}
      {productStatus === 'loading' && products.length > 0 && <p>Loading more products...</p>}
      {hasMoreProducts && productStatus !== 'loading' && (
        <button onClick={handleLoadMore} className={styles.loadMoreButton}>
          Load More Products <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginLeft: '8px' }}><polyline points="12 5 19 12 12 19"></polyline><line x1="19" y1="12" x2="5" y2="12"></line></svg>
        </button>
      )}
    </div>
  );
};

export default Store;
