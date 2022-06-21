import React from "react";

const SSR = ({ products }) => {
  return (
    <div>
      <h1>List of products</h1>

      {products.map((product) => {
        return <h3>{product.title}</h3>;
      })}
    </div>
  );
};

export default SSR;

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
