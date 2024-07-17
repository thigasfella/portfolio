import React from 'react';

export default function CardPhoto() {
  return (
    <div className="container-photo" data-aos="fade-down" data-aos-duration="1000">
      <div className="card">
        <div className="image-container">
          <img src="/img/my-photo.jpg" className="card-img-top" alt="Minha foto" />
        </div>
        <div className="card-body">
          <p className="card-text">
            <a href="https://wa.me/5562986251491?text=Ol%C3%A1!%20Vim%20do%20seu%20portfolio." target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp small-icon"></i>
            </a>
            <a href="http://github.com/thigasfella" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github small-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/thiago-lopes-de-souza-a34930301/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin small-icon"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
