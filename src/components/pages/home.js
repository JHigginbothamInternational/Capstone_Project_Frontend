import React, { Component, PropTypes } from "react";
import { StyleSheet, css } from "aphrodite";

import twisterInDown from "react-magic";

const styles = StyleSheet.create({
    magic: {
        swap: twisterInDown,
        animationDuration: "2s",
    },
});

export default function Home(props) {
    return (
        <div className="content-wrapper-home">         
            <div className="empty-space"></div>
            <div className={css(styles.magic)}>
                <h3>Welcome</h3>
            </div>
            <div className="empty-space"></div>
        </div>
   )
}