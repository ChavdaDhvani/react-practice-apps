import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red:0, green:0, orange:0});
    let styles = ["blue", "red", "green", "orange"];

    let updateBlue = () =>{
        setMoves(prev =>({...prev, blue: prev.blue + 1}))
    };

     let updateRed = () =>{
        setMoves(prev =>({...prev, red: prev.red + 1}))
    };

     let updateGreen = () =>{
        setMoves(prev =>({...prev, green: prev.green + 1}))
    };

     let updateOrange = () =>{
        setMoves( prev =>({...prev, orange: prev.orange + 1}))
    };
    return (
        <div>
            <h3>
                Game begins
            </h3>
            <div>
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: styles[0], color: "white"}} onClick={updateBlue}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button style={{backgroundColor: styles[1], color: "white"}} onClick={updateRed}>+1</button>
                <p>Green moves = {moves.green} </p>
                <button style={{backgroundColor: styles[2], color: "white"}} onClick={updateGreen}>+1</button>
                <p>Orange moves = {moves.orange} </p>
                <button style={{backgroundColor: styles[3], color: "white"}} onClick={updateOrange}>+1</button>
            </div>
        </div>
    )
}