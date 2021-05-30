const Trang2=(props)=>{
    const clickHere =(i)=>{
        props.xoadi(i);
    }
    return(
        props.dulieu.map((e,i)=>{
            return(

                <h1 key={i} onClick={()=>props.xoadi(i)}>Day la trang {e.name} </h1>


            )
        })
    )

}
export default Trang2;