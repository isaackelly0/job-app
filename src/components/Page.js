import uniqid from "uniqid";
import Card from "./Card";
import Sidebar from "./Sidebar";
const Page = props => {
    return(
        <section>
            {props.list.map(item=>{return<div key={uniqid()}><Card item={item}/></div>})}
        </section>
    )
}
export default Page;