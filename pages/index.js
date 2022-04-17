import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import axios from "axios";

export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in your town/city." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
