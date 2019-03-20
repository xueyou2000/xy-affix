import React from "react";
import Affix from "../src";
import "./index.scss";

export default function() {
    return (
        <div>
            <p>简单演示</p>

            <div className="block cadetblue">block1</div>

            <Affix offset={20}>
                <button>Affix Top</button>
            </Affix>

            <Affix placement="bottom" offset={20}>
                <button>Affix Bottom</button>
            </Affix>

            <div className="block antiquewhite">block1</div>
        </div>
    );
}
