import React from "react";
import { products } from "../constants/task1";
import ProductsTable from "../components/ProductsTable/ProductsTable";

function Task1() {
  return <ProductsTable products={products} />;
}

export default Task1;
