import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to Ecom-Demo</h1>
      <p className={styles.subtitle}>A minimal, modern e-commerce demo built with React & Redux Toolkit</p>
      <div className={styles.infoBox}>
        <span>React + Redux concepts ki sale lagi h, bs login kriye and explore our store, cart, order history!!!</span>
      </div>
    </div>
  );
};

export default Home;
