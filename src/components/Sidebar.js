import uniqid from 'uniqid';
import "./Sidebar.css"
const Sidebar = props => {
    return(
        <nav className="scroll">
            <ul>
                {props.list.map(item=>{
                    let id = "#" + item;
                    return<li key={uniqid()}><a href={id}>{item}</a></li>
                    })}
            </ul>
        </nav>
    )
}
export default Sidebar;