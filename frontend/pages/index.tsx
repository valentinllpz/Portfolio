import type { NextPage } from "next";
import Button from "../components/Button";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.helloworld}>
          {"<"}Hello World_{">"}
        </div>
        <h1 className={styles.title}>
          I am Valentin Lugand Lopez, a junior developer looking for my first
          opportunities.
        </h1>
        <Button text="Resume" />
      </div>
      <div className={styles.about}>
		<div className="drawing">
			<Image src="/images/val-cartoon.png" height={739} width={778} />
		</div>
        <div>
          zegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvk
          zegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvk
		  zegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvkz
		  egrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvkzegrejhtigfdhiuzehgeui
		  rzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvkzegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzh
		  scvbhdsjcbvkzegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscv
		  bhdsjcbvkzegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvk
		  zegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvkzegrejhtigfd
		  hiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvkzegrejhtigfdhiuzehgeuirzfhgi
		  uvdsghfubsuzbdvubdzhscvbhdsjcbvkzegrejhtigfdhiuzehgeuirzfhgiuvdsghfubsuzbdvubdzhscvbhdsjcbvk
        </div>
      </div>
    </>
  );
};

export default Home;
