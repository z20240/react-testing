import React, { useState } from 'react';


const AComponent = (props) => {
    const {  cb } = props;

    return (
        <div>
            Test AComponent
            <input onChange={e => cb( e.target.value )} />;
        </div>
    );
};

const Login = () => {

    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);

    return (
        <div>
            <p>Test</p>
            <span>{ count }</span>
            <input />
            <button onClick={ () => setCount(count + 1) }>click me</button>

            <AComponent cb={ (value) => setTest(value) } ></AComponent>

            Test = { test }
        </div>
    );
};

export default Login;
