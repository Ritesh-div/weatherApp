import { green } from "@mui/material/colors";
import { useState } from "react";

export default function Lodbtn(){
    let [Move,setMove]=useState({
        blue:0,
        red:0,
        yellow:0,
        green:0,
    });

    let updateblue=()=>{
        console.log(Move.blue);
        setMove((preMoves)=>{
            return {...preMoves,blue: preMoves.blue+=1}
    });
    };

    let updatered=()=>{
        console.log(Move.blue);
        setMove((preMoves)=>{
            return {...preMoves,red: preMoves.red+=1}
    });
    };

    let updateyellow=()=>{
        console.log(Move.blue);
        setMove((preMoves)=>{
            return {...preMoves,yellow: preMoves.yellow+=1}
    });
    };

    let updategreen=()=>{
        console.log(Move.blue);
        setMove((preMoves)=>{
            return {...preMoves,green: preMoves.green+=1}
    });
    };
   
    return(
        <div>
            <p>Game Begins!</p>
            <div>
                <p>Blue btn: {Move.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
                <p>Red btn: {Move.red}</p>
                <button style={{backgroundColor:"red"}}  onClick={updatered}>+1</button>
                <p>Yellow btn: {Move.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
                <p>Green btn: {Move.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
            </div>
        </div>
    );
}