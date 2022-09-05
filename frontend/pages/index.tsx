import type { NextPage } from "next";
import About from "../sections/About";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";



const Index: NextPage = () => {
  return (
    <>
		<Home/>
		<About/>
		<Projects/>
		<Contact/>
    </>
  );
};

export default Index;
