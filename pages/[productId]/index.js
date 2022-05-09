import path from "path";
import fs from "fs/promises";

function ProductDetailPage({ product }) {
  const { title, description } = product || { title: '', description: '' };

  // if fallback is true under getStaticPaths function
  // there must be a fullback in the UI, until the data comes
  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const filepath = path.join(process.cwd(), "data", "dummy-be.json");
  const jsonData = await fs.readFile(filepath);
  return {
    props: { product: JSON.parse(jsonData).products.find(product => product.id === params.productId) }
  }
}

// The goal of this function is to tell next which instances
// of this dynamic page should be generated
export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: 'p1'} },
    ],
    fallback: true,
  }
}

export default ProductDetailPage;
