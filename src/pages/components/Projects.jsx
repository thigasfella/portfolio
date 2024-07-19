import { useEffect, useState } from "react";
import Image from 'next/image';

const languageLogos = {
    "JavaScript": "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
    "HTML": "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
    "CSS": "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
    "REACT": "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    "NEXT.JS": "https://nextjs.org/static/favicon/favicon-32x32.png",
    "TypeScript": "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
    "SASS": "https://raw.githubusercontent.com/github/explore/main/topics/sass/sass.png",
    "Node.js": "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
    "MongoDB": "https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png",
    "SQL": "https://raw.githubusercontent.com/github/explore/main/topics/sql/sql.png",
    "Bootstrap": "https://raw.githubusercontent.com/github/explore/main/topics/bootstrap/bootstrap.png",
};

export default function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [languages, setLanguages] = useState({});

    useEffect(() => {
        const headers = {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        };
        fetch('https://api.github.com/users/thigasfella/repos', { headers })
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
                // Fetch languages for each repository
                data.forEach(repo => {
                    fetch(repo.languages_url, { headers })
                        .then(response => response.json())
                        .then(languagesData => {
                            setLanguages(prevLanguages => ({
                                ...prevLanguages,
                                [repo.id]: languagesData
                            }));
                        });
                });
            });
    }, []);

    return (
        <div className="card-projects-container">
            <div className="title-projects-container">
                <div data-aos="zoom-out-up" data-aos-duration="700">
                    <h2 className="title-projects" id="projects">PROJETOS</h2>
                </div>
                {repositories.map(repository => {
                    if (!repository.private && repository.topics.includes('portfolio')) {
                        return (
                            <div data-aos="zoom-out-up" data-aos-duration="700" key={repository.id}>
                                <div className="card-projects">
                                    <h3>{repository.name}</h3>
                                    <div className="description-container">
                                        <p className="description-project">{repository.description}</p>
                                        <div className="languages-container">
                                            {languages[repository.id] && Object.keys(languages[repository.id]).map((lang, index) => (
                                                <Image src={languageLogos[lang]} alt={lang} width={20} height={20} key={index} className="languages" />
                                            ))}
                                            <div className="links-project-container">
                                                <a href={repository.url} target="_blank" rel="noopener noreferrer" className="links-project"><i className="bi bi-box-arrow-up-right"></i></a>
                                                <a href={repository.html_url} target="_blank" rel="noopener noreferrer" className="links-project"><i className="bi bi-github"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
