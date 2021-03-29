import uniqid from 'uniqid';
const Sidebar = props => {
    return(
        <nav>
            <ul>
                {props.list.map(item=>{return<li key={uniqid()}><a href={item}></a></li>})}
            </ul>
        </nav>
    )
}
export default Sidebar;