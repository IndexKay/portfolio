import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Card({ title, description, icon, tags, colors }){

    const colorFinder = (skillName) =>{

        const obj = colors.find(({ skill }) => skill === skillName)
        if(obj === undefined){
            return('#000');
        }else{
            return obj.color;
        }
    }

    return(
        <div className="project-card">
            <div className="thumbnail">
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="details">
                <h4>{title}</h4>
                <p className="project-desc">{description}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <p className="item" style={{color: colorFinder(tag)}}>{tag}</p>
                    ))}
                </div>
                <div className="links">
                    <a href="">View Project</a>
                    <a href="">Github</a>
                </div>
            </div>
        </div>
    )
    
}
export default Card