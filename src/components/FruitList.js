import React from 'react';
import fruits from '../data/fruits';
import { useFruitHandler } from '../hooks/useFruitHandler';

export const FruitList = () => {

    const { fruitList, handleUp, handleDown, reset } = useFruitHandler( fruits );

    return (
        <div>
            {
                fruitList.map( 
                    ( info, index ) => (

                        <div key={ info.id }>

                            <h3>{ index }</h3>
                            <h3>{ info.name }</h3>

                            <button
                                onClick={ () => handleUp( index )  }
                            >
                                UP
                            </button>
                            <button
                                onClick={ () => handleDown( index ) }
                            >
                                DOWN
                            </button>
                        
                        </div>
                    )
                )
            }

            <button
                onClick={ reset }
            >
                Reset
            </button>
        </div>
    )
}