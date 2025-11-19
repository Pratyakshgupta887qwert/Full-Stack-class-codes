import React from 'react';
import styles from './helloMsg.module.css'     // css ko import kiya hai

function HelloMsg() {
    // const mystyle = {
    //     backgroundColor:'blue',
    //     color:'white',
    //     padding:'10px'
    //
    // }
    return (

        // <div style={{backgroundColor:'red',fontSize:'30px',}}>  //inline css
        //     my name is Anup Maurya</div>

        // <div style={mystyle}>    //internal css
        //          my name is Anup Maurya</div>

        <div className={styles.my}>my name is anup maurya</div>  // same css file name se error aa jata hai is liye filename.module.css kerte hai

    );
}

export default HelloMsg;