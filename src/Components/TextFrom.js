import React, { useState } from "react";



export function TextFrom(props) {

    const handleUpClick = () => {

        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("toUpperCase Has Been anabled" ,"success")

    }

    const handleLoClick = () => {

        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("toLowerCase Has Been anabled" ,"success")

    }


    const handleOnChange = (event) => {

        console.log("on change");
        setText(event.target.value)

    }

    const [text, setText] = useState('');
    // text="new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
            <div className="container my-2">
                <div className="form-group">
                    <h1>Enter text to analyze</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="text" rows="12"></textarea>
                </div>

                <button type="button" disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>

            <div className="container my-2">

                <h1>your text summary</h1>
                <p><b>{text.split(" ").filter((ele)=>{return ele.length!=0}).length} words and {text.length} characters</b></p>
                <p><b>{0.008*text.split(" ").filter((ele)=>{return ele.length!=0}).length} minute read</b></p>
                <h2>preview</h2>
                <p>{text.length>0?text:"Noting to Preview"}</p>
            </div>
        </>
    );

}