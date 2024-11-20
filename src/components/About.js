import React from 'react'

function About(props) {
    return (
        <div>
            <div className="container" >
                <div className="card text-center" style={{backgroundColor: props.mode === 'light'?'white':'#6c757d',color: props.mode === 'light'?'black':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode === 'light'?'white':'#343a40'}}>
                        Featured
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">About ReText</h1>
                        <p className="card-text"><strong>ReText</strong> is a utility which can be used to manipulate your text in the way you want. It has different functionalities such as convert to UPPERCASE text, convert to lowercase text, you can clear all the text which is written in the text area with a single click and you can remove the extra spaces in the text if any, and the most important you can copy the original text and the modified text in the clipboard and paste it anywhere.</p>

                    </div>
                    <div className="card-footer " style={{backgroundColor: props.mode === 'light'?'white':'#343a40'}}>
                        Copyright &#169; 2023 <strong>ReText</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
