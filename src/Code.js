import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Code = ({previousValue, currentValue,animationSpeed, size, digitColor, digitBorder, circleBorder}) => {
    
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
        <div className="code">
            <SyntaxHighlighter language="jsx" style={atomDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code


