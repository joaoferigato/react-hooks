import {useRef} from "react";
import {Link} from "react-router-dom";

function UseRef2() {
    const niceH1 = useRef()

    function changeH1() {
        niceH1.current.innerHTML = "Hey! useRef has changed me! Please help!"
        niceH1.current.style.color = "red"
    }

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <h1 ref={niceH1}>I am a really nice H1 tag!</h1>
            <button onClick={changeH1}>Change the above H1 tag</button>
        </>
    )
}

export default UseRef2