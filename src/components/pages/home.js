import React from "react";
import SmokeElement from "smoke-effect-react";

export default function Home(props) {
    return (
        <div className="content-wrapper-home">         
            <div className="empty-space">
                <SmokeElement
                smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
                smokeOpacity="0.5"
                />
            </div>
            <div className="title">
                <h3>Welcome</h3>
            </div>
        </div>
   )
}