import React from 'react';

const ButtonLink = (props) => {
    switch(props.pic) {
        case 'play': return (
            <div className="ButtonLink">
                <p>{props.text}</p>
                <img src={require('../assets/play-button.png')} alt=""/>
            </div>
        )
        case 'call': return (
            <div className="ButtonLink">
                <p>{props.text}</p>
                <img src={require('../assets/call.png')} alt=""/>
            </div>
        )
        default: return null;
    }
}

export default ButtonLink;