import { useEffect, useState } from "react"

export const makeVisible = () => {
    document.querySelector(".popup").style.transform = "translateY(0)"
}
export const makeInvisible = () => {
    document.querySelector(".popup").style.transform = "translateY(-100%)"
}
const Popup = ({textToDisplay}) => {
    const [text, setText] = useState("")
    useEffect(() => {
        setText(textToDisplay)
    }, [textToDisplay])
    return (
        <div className="popup">
            <div className="popup__text">
                {text}
            </div>
        </div>
    )
}

export default Popup
