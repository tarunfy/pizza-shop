import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza In Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        exercitationem aut possimus voluptas totam architecto vero, aperiam
        autem sit sequi!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default ProductList;
