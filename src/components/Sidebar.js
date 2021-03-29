import uniqid from 'uniqid';
const Sidebar = props => {
    return(
        <nav>
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