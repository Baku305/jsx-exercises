import React from "react";
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"));

const naming = (name) => <h1>Hello, {name}</h1>

root.render(naming("Francesco"));
