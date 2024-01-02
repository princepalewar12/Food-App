import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement(
    "div",
    { id: "parent",key:"1" },[
        React.createElement("div", { id: "child1" }, [
            React.createElement("h2", { className: "heading" }, "I am learning Ractjs from Akshay saini"),
            React.createElement("h3", { className: "secondHeading" }, "Ignited the App"),
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h2", { className: "heading" }, "I am an h2 tag"),
            React.createElement("h3", { className: "secondHeading" }, "I am an h3 tag"),
        ])
    ]

    
);

console.log(parent);
// const heading = React.createElement('h1', {id:"heading"}, "Hello World from React!")
//  console.log(heading);//Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
