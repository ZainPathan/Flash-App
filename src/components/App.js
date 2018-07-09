import React from 'react'
import Sidebar from "./Sidebar";

const App = (props) => {
    return (<div className='app'>
        <h1>Hello React - created using a Functional Component - changed something</h1>
        <Sidebar />
        {props.children}
    </div>);
};

export default App;