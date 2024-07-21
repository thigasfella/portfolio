export default function Contact(){
    return(
        <div className="card-footer-container" id="contact">
            <div className="title_contact-container" >
            <h2 className="title_contact">CONTATO</h2>
            </div>
            <div className="card-footer">
                <a href="https://wa.me/5562986251491?text=Ol%C3%A1!%20Vim%20do%20seu%20portfolio." target="_blank" rel="noopener noreferrer" className="icon_contact" ><i className="bi bi-whatsapp"></i></a>
                <a href="mailto:thiagolpssouza@gmail.com" target="_blank" rel="noopener noreferrer" className="icon_contact"><i className="bi bi-envelope"></i></a>
                <a href="https://www.linkedin.com/in/thiago-lopes-de-souza-a34930301/" target="_blank" rel="noopener noreferrer" className="icon_contact" ><i className="bi bi-linkedin"></i></a>
            </div>
            <div className="copy-container">
            <p className="textCopy">&copy;Thiago Lopes - 2024</p>
            </div>
        </div>
    )
}