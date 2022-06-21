import React from "react";

const ISR = ({ products }) => {
  return (
    <div>
      <h1>List of products</h1>

      {products.map((product) => {
        return <h3>{product.title}</h3>;
      })}
    </div>
  );
};

export default ISR;

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
