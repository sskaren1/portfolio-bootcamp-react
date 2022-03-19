// Importando Hooks
import { useEffect, useState } from "react";
// Importando estilos
import "../styles/layouts/projects.scss";
import "../styles/utilities/buttons.scss";
//  Importando Componentes
import ProjectWeb from "./ProjectWeb";

const Projects = () => {
  const [button, setButton] = useState(false);
  const [buttonContent, setButtonContent] = useState("View");
  console.log(button);
  console.log(buttonContent);

  const handleBtnProject = () => {
    // setButton(!button);
    if(button==true){
      setButton(false);
      setButtonContent("View");
    } else{
      setButton(true);
      setButtonContent("Ocultar");
    }
    console.log(button);
    console.log(buttonContent);
  }

  const classProject = button ? 'projects projects--web': 'projects projects--web oculto' ;

  return (
    <>
      <section className="projects" id="projects">
        <div className="projects__container">
          <h2 className="projects__title">Projects</h2>

          <div className="card card--projects">
            <div className="card__container">
              <div className="card__text">
                <h3 className="card__title">Web Developer</h3>
                <p className="card__paragraph">
                  Here you can find some of my developed projects.
                </p>
                
                <a className="button button--view" id="btnProject" onClick={handleBtnProject}>
                  {buttonContent}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectWeb classProject={classProject}/>
    </>
  );
};

export default Projects;
