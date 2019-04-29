import React from "react";
import Affix from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <p>简单演示</p>

            <div className="block cadetblue">block1</div>

            <Affix placement="auto" offset={20}>
                <button style={{ marginLeft: "300px" }}>Affix Auto</button>
            </Affix>

            <Affix offset={20}>
                <button>Affix Top</button>
            </Affix>

            <Affix placement="bottom" offset={20}>
                <button>Affix Bottom</button>
            </Affix>

            <div className="block antiquewhite">block1</div>

            {/* <div className="xy-manual-container">
                <Affix className="top-affix" offset={0}>
                    <ul className="demo-top">
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                        <li>
                            <a href="#">按钮类型</a>
                        </li>
                    </ul>
                </Affix>
            </div> */}
        </div>
    );
}
