import uniqid from "uniqid";
import Card from "./Card";
import Sidebar from "./Sidebar";
const Page = props => {
    let links = [];
    for(let i = 0; i < props.list.length ; i++){
        links.push(props.list[i].name);
    }
    return(
        <section>
            <Sidebar list={links}/>
            {props.list.map(item=>{return<div key={uniqid()}><Card item={item}/></div>})}
        </section>
    )
}
export default Page;