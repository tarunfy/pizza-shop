import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in your town/city." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  );
}
