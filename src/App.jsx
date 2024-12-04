import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";




function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState("")
  return(
    <>
      <div className="usernameInput">
      <p>Digite o nome de usuário GitHub desejado seguido da tecla TAB</p>
      <p>Ex: ruanfernandes2592</p>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>

      {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <RepoList nomeUsuario={nomeUsuario} />
      </>
      )}

      {/*formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>*/}
    </>
  )
}

export default App
