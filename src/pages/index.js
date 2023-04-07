import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Head from "next/head";
import requests from "../../utils/requests";

// import Image from "next/image";
// import { Inter } from "next/font/google";
//  const inter = Inter({ subsets: ["latin"] });

// client side rendering through browser
export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
}

// fetching data using server side rendering, when user requests page
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }

};