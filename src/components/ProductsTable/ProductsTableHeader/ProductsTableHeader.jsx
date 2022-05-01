import React from "react";
import styles from "./ProductsTableHeader.module.scss";

function ProductsTableHeader() {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.columnName}>Name</div>
      <div className={styles.columnName}>Price</div>
      <div className={styles.columnName}>Amount</div>
    </div>
  );
}

export default ProductsTableHeader;
