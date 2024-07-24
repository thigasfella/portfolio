import { useEffect } from 'react';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';

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
        <>
            <Tooltip title="INÍCIO">
            <a href="#home" className="nav-link" data-target="home">
                <Image src="/img/wired-outline-63-home.gif" width={25} height={25} alt="INICIO" unoptimized className='icon_lopp' priority/>
            </a>
            </Tooltip>
            <Tooltip title="SOBRE MIM">
            <a href="#aboutMe" className="nav-link" data-target="aboutMe">
                <Image src="/img/wired-outline-268-avatar-man.gif" width={25} height={25} alt="SOBRE MIM" unoptimized className='icon_lopp'/></a>
            </Tooltip>
            <Tooltip title="PROJETOS">
            <a href="#projects" className="nav-link" data-target="projects">
                <Image src="/img/wired-outline-187-suitcase.gif" width={25} height={25} alt="CONTATO" unoptimized className='icon_lopp'/></a>
            </Tooltip>
                <Tooltip title="CONTATO">
            <a href="#contact" className="nav-link" data-target="contact">
                <Image src="/img/wired-outline-1505-radio-walkie-talkie.gif" width={25} height={25} unoptimized alt="CONTATO" className='icon_lopp'/></a>
                </Tooltip>
                <Tooltip title="Baixar Currículo">
                <a href="/Currículo%20Desenvolvedor%20Web.pdf" download>
                    <Image src="/img/wired-outline-245-edit-document.gif" width={25} height={25} unoptimized alt="CURRÍCULO" className='icon_lopp'/>
                </a>
            </Tooltip>
        </>
    );
}
