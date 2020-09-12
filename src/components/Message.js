import React, { useEffect, useState } from 'react';
import AppContext from '../context/context';

export default function Message(){
    const [color, setColor] = useState('red');
    useEffect(() => {
        console.log('message useEffect')
    })

    return(
        <AppContext.Consumer>
            {appState => {
                return(
                    <div>
                        {appState.magicNumber}
                        <p>{appState.magicNumber < 5 ? 'less than 5' : 'greater than 5'}</p>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}