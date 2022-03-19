// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
// Importando estilos
import "../styles/layouts/projectsWeb.scss";
// Importando datos projectos
import projectDb from "./../assets/data/projectDb";

const projectWeb = (props) => {

  return (
    <>
      <div className={props.classProject}>
        <div className="projects__container">
          <h2 className="projects__title">Web projects</h2>
          <div className="cards cards--web">
            {projectDb.web.map((project, index) => (
              <div className="card card--web" key={index}>
                <div className="card__container">
                  <div className="card__img">
                    <a href={project.website} target="_blank">
                      <img src={project.image} alt="project" />
                    </a>
                  </div>

                  <div className="card__features">
                    <a
                      href={project.website}
                      target="_blank"
                      className="card__title"
                    >
                      <h3>{project.title}</h3>
                    </a>

                    <div className="card__span">
                      <span className="card__year">{project.year}</span>
                      {project.tools.map((tool, index) => (
                        <span className="card__tools" key={index}>
                          {tool}&nbsp;
                        </span>
                      ))}
                    </div>

                    <p className="card__description">{project.description}</p>

                    <div className="card__link">
                      <a href={project.website} target="_blank">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                      <a href={project.github} target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default projectWeb;
