import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    'div',
    {id: 'parent'},
    [React.createElement(
        'div',
        {id: 'child1'},
        [React.createElement(
            'h1', 
            {id: 'child-heading-1'}, 
            'Hello World From React!!! child 1 using app.js'
        ),
        React.createElement(
            'h2', 
            {id: 'child-heading-2'}, 
            'Hello World From React!!! child 2 using app.js'
        )]
    ),
    React.createElement(
        'div',
        {id: 'child2'},
        [React.createElement(
            'h1', 
            {id: 'child-heading-3'}, 
            'Hello World From React!!! child 1 using app.js'
        ),
        React.createElement(
            'h2', 
            {id: 'child-heading-4'}, 
            'Hello World From React!!! child 2 using app.js'
        )]
    )]
);
console.log(parent);


const heading = React.createElement(
    'h1', 
    {id: 'heading', xyz: 'abhi'}, 
    'Hello World From React!!! using app.js'
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);