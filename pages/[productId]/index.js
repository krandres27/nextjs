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

async function getData() {
  const filepath = path.join(process.cwd(), "data", "dummy-be.json");
  return JSON.parse(await fs.readFile(filepath));
}

export async function getStaticProps(context) {
  const jsonData = await getData();
  const { params } = context;
  const product = jsonData.products.find(product => product.id === params.productId);

  if (!product) {
    return { notFound: true }
  }

  return {
    props: { product }
  }
}

// The goal of this function is to tell next which instances
// of this dynamic page should be generated
export async function getStaticPaths() {
  const jsonData = await getData();
  const pathsWithParams = jsonData.products.map(product => ({ params: { productId: product.id } }));
  
  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default ProductDetailPage;
