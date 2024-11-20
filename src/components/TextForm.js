import React, {useState} from 'react'

export default function TextForm(props) {
    const convertUpperCase = ()=>{
        // console.log('Uppercase button clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success");
    }
    const convertLowerCase = ()=>{
        // console.log('Uppercase button clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success");
    }
    const clearText = ()=>{
        // console.log('Uppercase button clicked');
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const copyText = ()=>{
        // var text = document.getElementById('myText');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!","success");
    }
    const removeExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange = (e)=> {
        setText(e.target.value);
        // console.log('On change')
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color : props.mode === 'light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea className="form-control" id="myText" required value={text} onChange={handleOnChange} rows="6" style={{backgroundColor: props.mode === 'light'?'white':'#6c757d',color: props.mode === 'light'?'black':'white'}}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'secondary':'light'} mx-1 my-1`} onClick={convertUpperCase}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'secondary':'light'} mx-1 my-1`} onClick={convertLowerCase}>Convert to lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'secondary':'light'} mx-1 my-1`} onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'secondary':'light'} mx-1 my-1`} onClick={copyText}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'secondary':'light'} mx-1 my-1`} onClick={removeExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
            <h2>Your text summary here</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes will take to read</p>
        </div>
        <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview....'}</p>
            
        </div>
        </>
    )
}
