import React from "react";
import Affix from "xy-affix";
import "./index.scss";

export default function() {
    return (
        <div className="xy-manual-container2">
            <Affix className="top-affix2" offset={20}>
                <ul className="demo-top2">
                    <li>
                        <a href="#">内容一</a>
                    </li>
                    <li>
                        <a href="#">内容二</a>
                    </li>
                    <li>
                        <a href="#">内容三</a>
                    </li>
                </ul>
            </Affix>
        </div>
    );
}
