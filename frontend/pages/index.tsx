import type { NextPage } from "next";
import About from "../sections/About";
import Home from "../sections/Home";


const Index: NextPage = () => {
  return (
    <>
		<Home/>
		<About/>
    </>
  );
};

export default Index;
