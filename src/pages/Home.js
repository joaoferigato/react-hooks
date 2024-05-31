import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <p><Link to="/use-state">UseState</Link> - set a new state and re-render the DOM</p>
            <p><Link to="/use-effect1">UseEffect1</Link> - do something upon load (component mounting)</p>
            <p><Link to="/use-effect2">UseEffect2</Link> - do something upon load (component mounting) and when a state changes</p>
            <p><Link to="/use-effect3">UseEffect3</Link> - do something upon unload (component unmounting)</p>
            <p><Link to="/use-ref1">UseRef1</Link> - very similar to useState: set a new state but do not re-render the DOM</p>
            <p><Link to="/use-ref2">UseRef2</Link> - access a DOM element and manipulate it</p>
            <p><Link to="/use-ref3">UseRef3</Link> - store the previous useState value</p>
            <p><Link to="/use-reducer">UseReducer</Link> - similar to useState, but to manipulate more complex states</p>
            <p><Link to="/use-context">UseContext</Link> - can share a state with multiple children components</p>
        </>
    )
}

export default Home