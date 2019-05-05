import React, { useState } from "react";
import Affix from "../src";
import "./index.scss";

export default function() {
    const [fixed, setFixed] = useState(true);

    return (
        <Affix fixed={fixed} placement="top" offset={20}>
            <button onClick={() => setFixed(!fixed)}>Affix Top</button>
        </Affix>
    );
}
