import { useEffect, useState } from "react";

const languageLogos = {
    "JavaScript": "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
    "HTML": "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
    "CSS": "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
    "REACT": "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    "TypeScript": "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
    // Adicione outras linguagens e URLs de logos conforme necessário
};

export default function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [languages, setLanguages] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/thigasfella/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
                // Fetch languages for each repository
                data.forEach(repo => {
                    fetch(repo.languages_url)
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
            <h2 className="title-projects">PROJETOS</h2>
            </div>
            {repositories.map(repository => {
                if (repository.private === false) {
                    return (
                        <div className="card-projects" key={repository.id}>
                            <h3>{repository.name}</h3>
                            <p>{repository.description}</p>
                            <div className="languages-container">
                                {languages[repository.id] && Object.keys(languages[repository.id]).map(lang => (
                                        <img src={languageLogos[lang]} alt={lang} style={{width: '20px', height: '20px', marginRight: '5px'}} className="languages"/>
                                ))}
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}
