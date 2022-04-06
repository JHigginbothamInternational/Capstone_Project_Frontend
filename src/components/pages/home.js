import React from "react";
import 'animate.css';

export default function Home() {

    return (
        <div className="content-wrapper-home">
            <div className="text-wrapper">
                <div className="text">
                    <span className="welcome">W</span><span className="welcome">e</span><span className="welcome">l</span><span className="welcome">c</span><span className="welcome">o</span><span className="welcome">m</span><span className="welcome">e</span>
                </div>
                <div className="other-text">
                    <h5 className="animate__animated animate__fadeIn animate__delay-4s">Please sign in to play.</h5>
                </div>
            </div>
            <div className="home-spacer"></div>               
        </div>
   )
}