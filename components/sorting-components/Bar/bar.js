import React from 'react';
import styles from './Bar.module.css';

const Bar = ({
  width,
  height,
  val,
  stateA,
  stateB,
  stateC,
  stateD,
  sorted,
  style
}) => {
    let classNames = 'Bar';
    let  color = '#fff'
    if (sorted) {
        classNames += ' Bar_sorted';
        color = '#6DCC35'
    }
    
    if (stateD) {
        classNames += ` Bar_stateD`;
        color = '#33332D'
    } else if (stateC) {
        classNames += ` Bar_stateC`;
        color = '#FF5C60'
    } else if (stateB) {
        classNames += ` Bar_stateB`;
        color = '#FF6E6E'
    } else if (stateA) {
        classNames += ` Bar_stateA`;
        color = '#ffd54f'
    }


   let BarStyle = { ...style, width: `${width}%`, height: `${height}%`, background: color, display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', transition: 'all 125ms ease-in-out' };
   if (stateA || stateB || stateC || stateD) {
     BarStyle['marginRight'] = `${0.3 * width}%`;
     BarStyle['marginLeft'] = `${0.3 * width}% `; 
   }


    return (
        <div style={BarStyle} className={styles.classNames}>
        <span className="Bar__Text">{val}</span>
        </div>
    );
};

export default Bar;

