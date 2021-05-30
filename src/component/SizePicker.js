import {useState} from "react";

const SizePicker=()=>{
    const [size,setSize]=useState(15);
    const giamSize=()=>{
        return setSize(size-1);
    };
    const tangSize=()=>{
        return setSize(size+1);
    };

    return(
        <div className={"size-picker col-md-6 mt-50"}>
            <h1 className={"size-title"}>Size: {size}px</h1>
            <div className={"choose-size"}>
                <button onClick={tangSize} className={"mt-20 button-size" }>Tang</button>
                <button onClick={giamSize} className={"mt-20 button-size"}>Giam</button>
            </div>
        </div>
    )
}
export default SizePicker;