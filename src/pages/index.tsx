import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageComponent from './components/ImageComponents';
import TextApresentation from "./components/TextApresentation";
import CardPhoto from "./components/CardPhoto";
import LinksHeader from "./components/LinksHeader";
import AboutMe from "./components/AboutMe";
// import Projects from "./components/Projects"

export default function Home() {
  useEffect(() => {
    // Inicializa AOS apenas no cliente com um pequeno atraso
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
    }, 100); // 100ms de atraso
  }, []);
  
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by Thiago Lopes" />
      </Head>

      <LinksHeader />

      <main>

      <section className="section-container01" id="home">
          <div className="GlobalDiv">
            <TextApresentation />
            <ImageComponent />
          </div>
            <CardPhoto />
      </section>
      <section className="section-container02" >
          <AboutMe />
      </section>
      <section className="section-container03">
        {/* <Projects/> */}
      </section>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        async
      ></script>
    </>
  );
}
