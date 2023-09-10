
import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    let handleOnChange = (event) => {
        // run onchange event than   function  call from teaxArea
        setText(event.target.value);}


    

    let handleUpClick = () => {
        // run onclick event then call function from button
       let newtext=text.toUpperCase();
       setText(newtext);

    };
    let handleUpClickL=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    };
    let Clear=(event)=>{
       (event.target.value)=" ";
       (event.target.value)="";

      setText(event.target.value);
     
    };
   let handlecopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
   }
    return (
        <>

            <div className="container mb-3 ">
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Enter A text</label>
                    <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary m-3' onClick={handleUpClick}>Convert To toUpperCase </button>
                <button className='btn btn-primary m-3 ' onClick={handleUpClickL}>Convert To LowerCase </button>
                <button className='btn btn-primary  m-3' onClick={Clear}>Clear </button>
                <button className='btn btn-primary  m-3' onClick={handlecopy}>copy text</button>
               
                <div className="container my-3 ">
                <h1> Your Text Summry</h1>
                <p>{text.length} Characters ,  {text.split(" ").length} Words </p>
                <p>{0.008 * text.split(" ").length }Minuts of reads</p>
                </div>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    );
}