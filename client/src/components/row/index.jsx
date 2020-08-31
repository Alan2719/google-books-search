import React from "react";
import "./styles.css";

function Container(props) {
return <div className="row">{props.children}</div>
}

export default Container;