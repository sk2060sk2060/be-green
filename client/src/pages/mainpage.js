import React, { Fragment } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Content from "../components/Content";
import Footer from "../components/Footer";

function  MainPage() {

  return (
    <Fragment>
      <Header />
      <SubHeader/>
      <Content/>
      <Footer/>
    </Fragment>
  );

}

export default MainPage;