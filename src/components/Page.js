import uniqid from "uniqid";
import Card from "./Card";
import Sidebar from "./Sidebar";
const Page = props => {
    let links = [];
    for(let i = 0; i < props.list.length ; i++){
        links.push(props.list[i].name);
    }
    return(
        <section className='row'>
            <div className='col-3'>
            <Sidebar list={links}/>
            </div>
            <div className='col-9'>
            {props.list.map(item=>{return<div key={uniqid()}><Card item={item}/></div>})}
            </div>
        </section>
    )
}
export default Page;