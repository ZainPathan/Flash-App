import React from 'react';

const App = (props) => {
    return (<div className='app'>
        <h1>Hello React - created using a Functional Component - changed something</h1>
        {props.children}
    </div>);
};

export default App;