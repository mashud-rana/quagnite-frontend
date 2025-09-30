
import styles from "./Card.module.css";


const Card = ({ children }) => {
  return (
    <div className={styles.ic_card}>
      {children}
    </div>
  );
};

export default Card;
