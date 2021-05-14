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
            <div className='col-md-3 col-sm-12'>
            <Sidebar list={links}/>
            </div>
            <div className='col-md-6 col-sm-12'>
            {props.list.map(item=>{return<div className="index" key={uniqid()}><Card item={item}/></div>})}
            </div>
        </section>
    )
}
export default Page;