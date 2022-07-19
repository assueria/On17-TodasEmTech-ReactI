import App from "./App.css"
import Titulo from "./componentes/Titulo"
import Imagem from "../../../hello/src/Imagem"
import Paragrafo from "./componentes/Paragrafo"
import TituloPrincipal from "./componentes/TituloPrincipal"

function Cartoes(){
    return(

    <>

      <div className="header">
          <div className="titulo-header">
          <TituloPrincipal principal="Meu diário da {reprograma}"/>
          </div>
      </div>

      <div className="div-container">

        <div className="div-card">
          <Titulo title="Aprendendo Git"/>
          <Imagem image="https://i.pinimg.com/originals/0d/b2/2b/0db22b200ad32a1024502cf6ac887667.gif"/>
          <Paragrafo>
          Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.          </Paragrafo>
        </div>

        <div className="div-card">
          <Titulo title="Aprendendo HTML"/>
          <Imagem image="https://media3.giphy.com/media/iO4ptP2iuV29yui3mx/giphy.gif"/>
          <Paragrafo>
          HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.          </Paragrafo>
        </div>

        <div className="div-card">
          <Titulo title="Aprendendo CSS"/>
          <Imagem image="https://thumbs.gfycat.com/DizzyJadedAsianlion-size_restricted.gif"/>
          <Paragrafo>
          Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.
          </Paragrafo>
        </div>
        

        <div className="div-card">
          <Titulo title="Aprendendo Javascript"/>
          <Imagem image="https://media.giphy.com/media/3ohhwIbKJAT3eUz38s/giphy.gif"/>
          <Paragrafo>
          JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.
          </Paragrafo>
        </div>

      </div>

      <div className="footer">
        Feito por Assuéria
      </div>
    </>

    )
}

export default Cartoes