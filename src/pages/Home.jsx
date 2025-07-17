import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to Redux-Ecom</h1>
      <p className={styles.subtitle}>A minimal, modern e-commerce demo built with React & Redux Toolkit</p>
      <div className={styles.infoBox}>
        <span>Explore our store, manage your cart, and learn React + Redux concepts!</span>
      </div>
    </div>
  );
};

export default Home;
