import { useEffect } from 'react';
import Image from 'next/image';

export default function LinksHeader() {
    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('data-target');
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
        };

        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            link.addEventListener('click', handleClick);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <header>
            <a href="#home" className="nav-link" data-target="home">
                <Image src="/img/wired-outline-63-home.gif" width={25} height={25} alt="INICIO" className='icon_lopp'/>
            </a>
            <a href="#aboutMe" className="nav-link" data-target="aboutMe">
                <Image src="/img/wired-outline-268-avatar-man.gif" width={25} height={25} alt="SOBRE MIM" className='icon_lopp'/></a>
            <a href="#projects" className="nav-link" data-target="projects">
                <Image src="/img/wired-outline-245-edit-document.gif" width={25} height={25} alt="PROJETOS" className='icon_lopp'/></a>
            <a href="#contact" className="nav-link" data-target="contact">
                <Image src="/img/wired-outline-177-envelope-send.gif" width={25} height={25} alt="CONTATO" className='icon_lopp'/></a>
        </header>
    );
}
