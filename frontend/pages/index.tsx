import type { NextPage } from "next";
import About from "../sections/About";
import Home from "../sections/Home";
import Projects from "../sections/Projects";


const Index: NextPage = () => {
  return (
    <>
		<Home/>
		<About/>
		<Projects/>
    </>
  );
};

export default Index;
