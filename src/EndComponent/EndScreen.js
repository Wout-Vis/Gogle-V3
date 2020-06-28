import React from 'react';
import Progress from '../Progress';

export default function EndScreen() {

    function reset()
    {
        window.location.reload();
        Progress.updateProgress('0');
    }

    return (
        <div>
            <div id="endBox">
                <h1>The End</h1>
                <div id="introTextBox" >
                    by Double Quantum Quartet
                </div>
                <br/>
                <button id="resetButton" onClick={ () => reset() }>
                    Reset Experience
                </button>
            </div>
        </div>
    )
}
