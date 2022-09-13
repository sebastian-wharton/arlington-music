import styles from "../../styles/Store.module.css";
import Head from "next/head";
import Link from "next/link";
import StoreCard from "../../components/StoreCard";
import Filter from "../../components/Filter";

const Store = () => {
  return (
    <>
      <Head>
        <title>Arlington Music | Store</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      {/* <h1 className="justify-center text-center absolute top-16 px-6">
        Home > Store
      </h1> */}

      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.header}></div>
          <Filter />
          <div className={styles.side}>
            <p>Sidebar</p>
          </div>
          <div className={styles.main}>
            {/* <p>Mainbar</p> */}
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
        </div>
      </div>

      {/* <Link href="/store/cart">
        <a>View Cart</a>
      </Link> */}
      {/* <div className="box1 w-[80%] h-[7%] bg-Thred absolute right-4 top-[110px]"></div>
      <div className={styles.results}>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div> */}
      {/* <div className={styles.gridbox}>
        <div className={styles.header}></div>
        <div className={styles.main}></div>
        <div className={styles.sidebar}></div>
      </div> */}
    </>
  );
};

export default Store;
