import React, {useState} from 'react'

export default function TextForm(props) {

    //here text is a state variable which we can update using setText 
    const [text,setText]=useState('');
    // text="new text"; //Wrong way to chnage the state
    // setText('new text'); //Correct way to chnage the state

    const handleUpClick=()=>{

        console.log("Convert to Uppercase clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        text!=""?props.showAlert(": Converted to Uppercase","success"):props.showAlert(": Write something","warning");
    }

    const handleOnChange=(event)=>{
        console.log("Handle on change");
        setText(event.target.value)
    }

    const handleLowerClick=()=>{
        console.log("Convert to Lowercase clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        text!=""?props.showAlert(": Converted to Lowercase","success"):props.showAlert(": Write something","warning");
    }

    const handleClear=()=>{
        console.log("Clear the Text");
        setText("");
        text!=""?props.showAlert(": Text has been Cleared","success"):props.showAlert(": Nothing to Clear","warning");        
    }

    const handleCopy=()=>{
        console.log("Copy the text");
        let cText=document.getElementById('exampleFormControlTextarea1');
        cText.select();
        navigator.clipboard.writeText(cText.value);
        text!=""?props.showAlert(": Copied to the dashboard","success"):props.showAlert(": Write something","warning");
    }

    const handleExtraSpaces=(event)=>{
        console.log("Remove Extra spaces");
        setText(text.split(' ').filter(word => word).join(' '));
        text!=""?props.showAlert(": Extra spaces has been removed","success"):props.showAlert(": Write something","warning");

    }

    let words=0;
    if(text.length===0){
        words=0
    }

    else{
        words=(text.split(" ").length);
    }


    return (
        <>
            <div className="container">
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-2">
                
                <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'#b1a7a7':'White',color: props.mode==='dark'?'red':'black'}} onChange={handleOnChange} rows="10" value={text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLowerClick} style={{margin: "0px 16px"}}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleClear} style={{margin: "0px"}}>Clear Text</button>
            <button className="btn btn-primary" onClick={handleCopy} style={{margin: "0px 12px"}}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces} style={{margin: "0px 4px"}}>Remove Extra Spaces</button>

            </div>
          
            <div className="container my-3">
                <h2 style={{color: props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
                <p style={{color: props.mode==='dark'?'white':'black'}}>{words} words, {text.length} characters</p>
                <p style={{color: props.mode==='dark'?'white':'black'}}>Reading Time : {0.008 * words} minutes</p>
            </div>

            <h2 className='mx-3' style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
            <p className='mx-3' style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something to preview over here"}</p>


        </>
    )
}

// TextForm.propTypes={
//     heading : PropTypes.string, 
// };
