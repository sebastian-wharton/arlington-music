import styles from "../../styles/Store.module.css";
import Head from "next/head";
import Link from "next/link";

const Store = () => {
  return (
    <>
      <Head>
        <title>Arlington Music | Store</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className="justify-center text-center absolute top-16 px-6">
        Home > Store
      </h1>
      <Link href="/store/cart">
        <a>View Cart</a>
      </Link>
      <div className={styles.results}>
        <div className={styles.card}>Card1</div>
        <div className={styles.card}>Card2</div>
        <div className={styles.card}>Card3</div>
        <div className={styles.card}>Card4</div>
        <div className={styles.card}>Card5</div>
        <div className={styles.card}>Card6</div>
      </div>
    </>
  );
};

export default Store;
