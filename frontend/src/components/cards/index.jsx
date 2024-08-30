import "./style.scss";
import React from 'react';
import "../../assets/styles/_resets.scss";
import "../../assets/styles/_setting.scss";
function Cards(props) {
    return (
        <div className="Cards">
             <div className="img">
                <img src= {props.src}  alt="" />
             </div>
            <p>
                {props.title}
            </p>
            <div className="circle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3>{props.children}</h3>
        </div>
    );
}
export default Cards;