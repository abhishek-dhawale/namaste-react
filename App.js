import React from "react";
import ReactDOM from "react-dom/client";

// react element
const title = (
    <h1 id="heading">
        Namaste React using JSX
    </h1>
);

// react functional components  // Component composition
const HeadingCompmponent = () => (
    <div className="container">
        {title}
        <h1>Namaste React functional components</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompmponent/>);


