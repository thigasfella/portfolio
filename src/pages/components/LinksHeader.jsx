import { useEffect } from 'react';

export default function LinksHeader() {
    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = event.target.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const elementHeight = targetElement.offsetHeight;
                    const windowHeight = window.innerHeight;
                    const scrollTo = elementTop - ((windowHeight - elementHeight) / 2);

                    window.scrollTo({
                        top: scrollTo,
                        behavior: 'smooth'
                    });
                }
            });
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', () => {});
            });
        };
    }, []);

    return (
        <header>
            <a href="#home" className="nav-link" data-target="home">HOME</a>
            <a href="#aboutMe" className="nav-link" data-target="aboutMe">SOBRE MIM</a>
            <a href="#projects" className="nav-link" data-target="projects">PROJETOS</a>
            <a href="#contact" className="nav-link" data-target="contact">CONTATO</a>
        </header>
    );
}
