import React from "react";
import styles from "./ProductsTableItem.module.scss";

function ProductsTableItem({ product }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>{product.title}</div>
      <div className={styles.itemPrice}>{product.price} USD</div>
      <div className={styles.itemAmount}>{product.count}</div>
    </div>
  );
}

export default ProductsTableItem;
