import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json()) // res vai receber a api em .json
        .then(resJson => { // res.json passa a ser resJson
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson); // setRepos recebe resJson
            }, 3000);
            //console.log(resJson);
        })
    }, [nomeUsuario])

    return (

        <div className="container">

        {estaCarregando ? (
            <h3>Carregando...</h3>
        ): (
        <ul className={styles.list}>
            {/*repos.map(repositorio => ( //Cada item individual do array é um repositório e o .map vai passar por todos eles OU */}
            {repos.map(({id, name, language, html_url}) => ( // Usando desestruturação ES6
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> {name}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b> Linguagem: </b> {language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                </li>
            ))}
        </ul>
        )}

        </div>
    )
}

export default RepoList;