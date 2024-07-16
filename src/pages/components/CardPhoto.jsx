export default function CardPhoto(){
    return(
        <div className="container-photo" id="#home" data-aos="fade-down" data-aos-duration="1000">
        <div className="card" style={{ width: '13rem' }}>
          <img src="/img/my-photo.jpg" className="card-img-top" alt="Minha foto" width={300} height={320} />
          <div className="card-body">
            <p className="card-text">
              <a href="http://github.com/thigasfella" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github "></i>
              </a>
              <a href="https://www.linkedin.com/in/thiago-lopes-de-souza-a34930301/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </p>
            </div>
          </div>
        </div>

    )
}