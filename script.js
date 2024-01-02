/**
 *
 * <div>
 *      <div>
 *          <h2 class="heading">I am h2 tag</h2>
 *          <h3 class="secondHeading">I am h3 tag</h3>
 *      </div>
 * <div id="child">
 *      <h2 class="heading">I am h2 tag</h2>
 *      <h3 class="secondHeading">I am h3 tag</h3>
 * </div>
 * </div>
 *ReactElement(object) => HTML(Browser Understands)
 */
// import React from "react";
// import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },[
        React.createElement("div", { id: "child1" }, [
            React.createElement("h2", { class: "heading" }, "I am learning Ractjs from Akshay saini"),
            React.createElement("h3", { class: "secondHeading" }, "I am an h3 tag"),
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h2", { class: "heading" }, "I am an h2 tag"),
            React.createElement("h3", { class: "secondHeading" }, "I am an h3 tag"),
        ])
    ]

    
);

console.log(parent);
// const heading = React.createElement('h1', {id:"heading"}, "Hello World from React!")
//  console.log(heading);//Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
