import uniqid from 'uniqid';
import {HashLink as Link} from 'react-router-hash-link';
import "./Sidebar.css"
const Sidebar = props => {
    return(
        <nav className="scroll">
            <ul>
                {props.list.map(item=>{
                    let id = "#" + item;
                    return<li key={uniqid()}><Link smooth to={id}>{item}</Link></li>
                    })}
            </ul>
        </nav>
    )
}
export default Sidebar;