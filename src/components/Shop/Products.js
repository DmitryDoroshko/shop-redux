import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: "id1", title: "Harry Potter", price: 6, description: "Book that I love very much!" },
  { id: "id2", title: "Martin Eden", price: 8.5, description: "Book that I love so much more!!!" },
  { id: "id3", title: "IPhone", price: 99.9, description: "A very cool phone. Check it out!" }
];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((product) => <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products}
      </ul>
    </section>
  );
};

export default Products;
