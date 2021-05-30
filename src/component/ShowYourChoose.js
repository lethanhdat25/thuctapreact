const ShowYourChoose=(props)=>{
    const setBorder=()=>{
        return {backgroundColor:props.color}
    }
    return(
        <div className={"showYourChoose mt-20"}>
            <span className={"detailYourChoose"}>Color: {props.color} - Fontsize: 15</span>
            <div className={"result"}>
                <div className={"example pd-10"} style={setBorder()}>
                    <span>Noi dung setting</span>
                </div>
            </div>
        </div>
    )
}
export default ShowYourChoose;