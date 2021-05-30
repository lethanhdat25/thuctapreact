import {Link} from "react-router-dom";

export default function Body(){
    const clickHere=(a)=>{
        console.log(a);
        console.log(this.refs.name.value);
    }
    return (
        <div>
            <h1>Day la trang 1</h1>
            <Link to={"/Trang2"}><button type={"button"} onClick={a=>clickHere(a)}>Click</button></Link>
        </div>
    )

}
