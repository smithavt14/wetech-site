import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Layout from "../components/layout/layout";
import Container from "../components/container/container";


export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zima Digital Technology Solutions</title>
        <meta name="description" content="Our China-based team of developers, designers, and strategists are here to help build better tools for modern teams." />
        <link rel="shortcut icon" href="hurray.png" type="image/x-icon"/>
      </Helmet>
      <Header/>
      <Container>
        <Banner/>
      </Container>
    </Layout>
  )
}