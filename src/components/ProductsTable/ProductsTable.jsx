import React, { useState } from "react";
import ProductsTableItem from "./ProductsTableItem/ProductsTableItem";
import ProductsTableHeader from "./ProductsTableHeader/ProductsTableHeader";

function ProductsTable({ products }) {
  const [sortedProducts, setSortedProducts] = useState(products);

  function sort(sortBy) {
    const productsCopy = products.concat();

    switch (sortBy) {
      case "low_price":
        setSortedProducts(
          productsCopy.sort((a, b) => {
            return a.price - b.price;
          })
        );

        break;
      case "high_price":
        setSortedProducts(
          productsCopy.sort((a, b) => {
            return b.price - a.price;
          })
        );
        break;
      case "less":
        setSortedProducts(
          productsCopy.sort((a, b) => {
            return a.count - b.count;
          })
        );
        break;

      case "more":
        setSortedProducts(
          productsCopy.sort((a, b) => {
            return b.count - a.count;
          })
        );
        break;
      case "default":
        setSortedProducts(products);
        break;
      default:
        return;
    }
  }

  return (
    <>
      <select
        name="sort"
        onChange={(e) => {
          sort(e.target.value);
        }}
      >
        <option value="default">default</option>
        <option value="low_price">low to high price</option>
        <option value="high_price">high to low price</option>
        <option value="less">less to more items</option>
        <option value="more">more to less items</option>
      </select>
      <ProductsTableHeader />
      {sortedProducts.map((product) => {
        return <ProductsTableItem product={product} key={product.id} />;
      })}
    </>
  );
}

export default ProductsTable;
