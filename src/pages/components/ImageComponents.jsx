import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';

const ImageComponent = () => {
  useEffect(() => {
    AOS.refresh(); // Atualiza o AOS para reconhecer os novos elementos
  }, []);

  return (
    <div className="photos-container">
      <div className="photos">
        <Image data-aos="fade-left" data-aos-duration="2000"
          src="/img/logo-react.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />
          <Image data-aos="fade-left" data-aos-duration="2100"
          src="/img/logo-js.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />
          <Image data-aos="fade-left" data-aos-duration="2200"
          src="/img/logo-typescript.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />
          <Image data-aos="fade-left" data-aos-duration="2300"
          src="/img/logo-node.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />

          <Image data-aos="fade-left" data-aos-duration="2400"
          src="/img/logo-css.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />
        
        <Image data-aos="fade-left" data-aos-duration="2500"
          src="/img/logo-html5.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />

          <Image data-aos="fade-left" data-aos-duration="2600"
          src="/img/mongodb-logo.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />

          <Image data-aos="fade-left" data-aos-duration="2700"
          src="/img/logo-nextjs.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />

          <Image data-aos="fade-left" data-aos-duration="2800"
          src="/img/logo-sass.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />
          <Image data-aos="fade-left" data-aos-duration="2900"
          src="/img/logo-bootstrap.png" // Certifique-se de que esta imagem esteja na pasta public
          alt="Logo Node" 
          width={100} 
          height={100}
          className='image'
        />

      </div>
    </div>
  );
}
export default ImageComponent;
