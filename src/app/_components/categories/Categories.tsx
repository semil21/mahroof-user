import React from 'react'
import Styles from "./Categories.module.scss"

const Category = () => {
  const categories = [
    {
      name: "Jacket",
      image: "https://m.media-amazon.com/images/I/71PkKbZ0B7L._SY741_.jpg"
    },
    {
      name: "Wallet",
      image: "https://m.media-amazon.com/images/I/81ZxGfxU5bL._AC_UL320_.jpg"
    },
    {
      name: "Belt",
      image: "https://m.media-amazon.com/images/I/612NkUkzLRL._AC_UL320_.jpg"
    },
    {
      name: "Purse",
      image: "https://m.media-amazon.com/images/I/71XHVPCBaYL._SY625_.jpg"
    }
  ];

  return (
    <div className={Styles.categoryWrapper}>
      <h1 className={Styles.categoryHeader}>Our Categories</h1>
      <div className={Styles.categoryCardWrapper}>
        {categories.map((category, index) => (
          <div key={index} className={Styles.categoryCard}>
            <img src={category.image} alt={category.name} className={Styles.categoryImage} />
            <h2 className={Styles.categoryName}>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
