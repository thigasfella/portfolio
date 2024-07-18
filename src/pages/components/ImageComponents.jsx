import Image from 'next/image';
import React from 'react';

const ImageComponent = () => {


  const data = [
    { src: "/img/logo-react.png", duration: 2000 },
    { src: "/img/logo-js.png", duration: 2100 },
    { src: "/img/logo-typescript.png", duration: 2200 },
    { src: "/img/logo-node.png", duration: 2300 },
    { src: "/img/logo-css.png", duration: 2400 },
    { src: "/img/logo-html5.png", duration: 2500 },
    { src: "/img/mongodb-logo.png", duration: 2600 },
    { src: "/img/logo-nextjs.png", duration: 2700 },
    { src: "/img/logo-sass.png", duration: 2800 },
    { src: "/img/logo-bootstrap.png", duration: 2900 },
  ];

  return (
    <div className="logos-container">
      <div className="logos">
        {data.map((image, index) => (
          <Image
            key={index}
            data-aos="fade-left"
            data-aos-duration={image.duration}
            src={image.src}
            alt="Logo"
            width={35}
            height={32}
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
