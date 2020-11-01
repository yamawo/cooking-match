import { NextPage } from "next";
import Router from "next/router";
import React from "react";

const IndexPage: NextPage = () => {
  React.useEffect(() => {
    void Router.replace("/top");
  }, []);
  return null;
};

export default IndexPage;
