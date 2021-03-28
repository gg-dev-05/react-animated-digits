import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Popup from './Popup'
import {makeVisible, makeInvisible} from './Popup'

const Code = ({previousValue, currentValue,animationSpeed, size, digitColor, digitBorder, circleBorder}) => {
    
    const [textToDisplay, setTextToDisplay] = useState("Click to copy")
    const copyToClipBoard = () => {
        setTextToDisplay("Copied to clipboard!")
        navigator.clipboard.writeText(codeString);
        setTimeout(() => {
            setTextToDisplay("Click to copy")
        }, 2000)
    }
    const codeString = 
    `
        import Digits from 'react-animated-digits-component'
        function Demo(){
            return {
                <Digits previousValue={${previousValue}} currentValue={${currentValue}} animationSpeed={${animationSpeed}} size={${size}} digitColor={'${digitColor}'} digitBorder={'${digitBorder}'} circleBorder={'${circleBorder}'}/>
            }
        }
    `;
    return (
        <div className="code" onMouseEnter={() => makeVisible()} onMouseLeave={() => makeInvisible()} onClick={() => copyToClipBoard()}>
            <Popup textToDisplay={textToDisplay}/>
            <SyntaxHighlighter language="jsx" style={atomDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code


