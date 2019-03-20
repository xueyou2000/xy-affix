import React, { useRef } from "react";
import Affix from "../src";
import "./index.scss";

export default function() {
    const containerRef = useRef();

    return (
        <div>
            <p>指定容器</p>

            <section className="code-box-demo">
                <div className="scrollable-container" ref={containerRef}>
                    <div className="background">
                        <Affix offset={20} target={() => containerRef.current}>
                            <button>Affix Top</button>
                        </Affix>
                    </div>
                </div>
            </section>
        </div>
    );
}
