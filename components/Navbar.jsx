import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="telephone"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>0120 894 839</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li>
              <a className={styles.listItem}>Homepage</a>
            </li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width="160px" height="69px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <Link href="/cart" passHref>
        <a>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image
                src="/img/cart.png"
                alt="logo"
                width="30px"
                height="30px"
              />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
