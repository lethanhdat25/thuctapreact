import React, {useState} from "react";
import './App.css';
import ColorPicker from "./component/ColorPicker";
import SizePicker from "./component/SizePicker";
import ButtonReset from "./component/ButtonReset";
import ShowYourChoose from "./component/ShowYourChoose";
function App() {
    const [color,setColor]=useState("red");
    const outputColor=(cl)=>{
        setColor(cl);
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <ColorPicker color={color} OuputColor={outputColor}/>
                <SizePicker/>
                <ButtonReset/>
                <ShowYourChoose color={color}/>
            </div>
        </div>
    )
}
export default App;
