import type { AppProps } from "next/app";
import '../../styles/globals.css'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // Opções de inicialização
      duration: 1000, // duração da animação
    });
  }, []);
  return <Component {...pageProps} />;
}
