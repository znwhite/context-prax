import React from 'react';
import AppContext from '../context/context';

export default function Message2(){
    return(
        <AppContext.Consumer>
            {appState => {
                return(
                    <div>
                        {appState.magicNumber}
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}