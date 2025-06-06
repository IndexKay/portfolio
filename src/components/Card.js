import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ title, description, icon, tags, color }){

    return(
        <div className="project-card">
            <div className="thumbnail" style={{background: color}}>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="details">
                <h4>{title}</h4>
                <p className="project-desc">{description}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <p>{tag}</p>
                    ))}
                </div>
                <div className="links">
                    <a>View Project</a>
                    <a>Github</a>
                </div>
            </div>
        </div>
    )
    
}
export default Card