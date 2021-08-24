import { useState } from "react";
import React from  "react"

const number = [ "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "."]


export default function Calculation(){
    const [result, setResult]=useState([""])

    
      

    const handleClick=(e)=>{
        if(result[0]===""){
            result.shift()
        }
        let results= result.concat(e.target.name)
        
        console.log(results)
        setResult(results.toString())
        
    }

    const clear = ()=>{
        setResult("")
    }
    const backspace = ()=>{
        setResult(result.slice(0, -1))
    }
    const calculation = ()=>{
        try{
            setResult(eval(result).toString())
        }catch(err){
            setResult("Error")
            
        }
         
    }


    return(
        <div className="container">
            <form>
                <input type="text" value={result} />
            </form>
            
            <div className="keypad">
                <button id="Clear" onClick={clear} >Clear</button>
                <button id="backspace" onClick={backspace}>C</button>
                {number.map((number)=><button name={number} onClick={handleClick}>{number}</button>)}
                <button id="resulted" onClick={calculation}>=</button>
            </div>
            
        </div>
    );
}