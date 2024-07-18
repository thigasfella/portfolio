import { useEffect, useState } from "react";

export default function Projects(){
    const [respositories, setRepositories] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/thigasfella/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <div>
            {respositories.map(repository =>{
                return(
                    <div className="card-projects" key={repository.id}>
                        {repository.name}
                    </div>
                )
            })}
        </div>
    )
}