import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

interface Repository{
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositopries, setRepositories] = useState<Repository[]>([]);

    //Cuidado para não deixar sem o segundo parametro
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return( 
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositopries.map(repository =>{
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}                
            </ul>
        </section>
    )
}
