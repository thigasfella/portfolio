import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // Importe o componente Image do next/image


export default function Home() {
  useEffect(() => {
    // Inicializa AOS apenas no cliente
    AOS.init();
  }, []); // O array vazio [] garante que useEffect seja executado apenas uma vez após a montagem inicial do componente

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by Thiago Lopes" />

      </Head>
      <header>
        <a href="#home">HOME</a>
        <a href="#aboutMe">SOBRE MIM</a>
        <a href="#projects">PROJETOS</a>
        <a href="#contact">CONTATO</a>
      </header>
      <main>
        <section>
          <div className="container-photo" id="#home"  data-aos="fade-down" data-aos-duration="1000">
            <div className="card" style={{ width: '13rem',}}>
              <Image src="/img/my-photo.jpg" className="card-img-top" alt="Minha foto" width={300} height={320}/>
              <div className="card-body">
                <p className="card-text">
                <a href="http://github.com/thigasfella" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github "></i>
                </a>
                <a 
                href="https://www.linkedin.com/in/thiago-lopes-de-souza-a34930301/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i>
                </a>
                </p>
              </div>
            </div>
          </div>
          <div className="vertical-text-container">
                <p className="vertical-text" data-aos="fade-left" data-aos-duration="2000">DESENVOLVEDOR FULL STACK</p>
            </div>
        </section>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      ></script>
    </>
  );
}