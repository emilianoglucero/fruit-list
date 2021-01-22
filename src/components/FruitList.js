import React from 'react'

export const FruitList = ( {info} ) => {
    console.log( info );
    // const tmp = a[4]
    // a[4] = a[3]
    // a[3] = tmp

    const handleUp = () => {

        //months.splice(4, 1, 'May');
        const tmp = info[info.id]

    }

    const handleDown = () => {
        
    }

    return (
        <div>

            <h3>{info.id}</h3>
            <h3>{info.name}</h3>
            <button
                onClick={ handleUp }
            >
                UP
            </button>
            <button
                onClick={ handleDown }
            >
                DOWN
            </button>
            
        </div>
    )
}
