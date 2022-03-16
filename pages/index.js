import path from "path";
import fs from "fs/promises";

export default function Home(props) {
  const { products } = props;
  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// GgetStaticProps as is implemented here, will run on build time
// serving the props to the page that is using them.
export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "dummy-be.json");
  const jsonData = await fs.readFile(filepath);
  return { props: { products: JSON.parse(jsonData).products } };
}
