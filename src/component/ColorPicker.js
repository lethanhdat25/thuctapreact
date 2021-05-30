import {useState} from "react";

const ColorPicker=(props)=>{
    const [color]=useState(["green","red","blue"]);
    const setStyleColor=(color)=>{
         return { backgroundColor:color};
    }
    const choose_color=(cl)=>{
        props.OuputColor(cl);
        console.log(cl);
    }
    const spans=color.map((cl,id)=>{
        return(
            <span
            onClick={()=>choose_color(cl)}
            className={props.color===cl?"active theColor mt-20":"theColor mt-20"}
            key={id} style={setStyleColor(cl)}>
            </span>
        )
    });

    return(
        <div className={"color-picker col-md-6 mt-50"}>
            <h1 className={"color-title"}>Color Picker</h1>
            <div className={"choose-color"}>
                {spans}
            </div>
        </div>
    )
}
export default ColorPicker;