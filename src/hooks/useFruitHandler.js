import { useState } from 'react';
import fruits from '../data/fruits';
import PropTypes from 'prop-types';

export const useFruitHandler = ( initialFruitList =  { fruits }  ) => {
    
    const [fruitList, setFruitsList] = useState( initialFruitList );

    const handleUp = ( index ) => {

        if (index !== 0) {

            const indexFruitToSwap = index - 1;

            /**  
            * If we want to use arrays or objects in our React state, 
            * we have to create a copy of the value before modifying it
            **/
            const fruitListOrdered = [...fruitList];

            const temp = fruitListOrdered[index];
            fruitListOrdered[index] = fruitListOrdered[indexFruitToSwap];
            fruitListOrdered[indexFruitToSwap] = temp;

            setFruitsList( fruitListOrdered );

        } else {
            console.log('Ha llegado al final de la lista y no puede subir mas');
        }
    }


    const handleDown = ( index ) => {

        if (index < fruitList.length - 1 ) {

            const indexFruitToSwap = index + 1;

            /**  
            * If we want to use arrays or objects in our React state, 
            * we have to create a copy of the value before modifying it
            **/
            const fruitListOrdered = [...fruitList];
            
            const temp = fruitListOrdered[index];
            fruitListOrdered[index] = fruitListOrdered[indexFruitToSwap];
            fruitListOrdered[indexFruitToSwap] = temp;

            setFruitsList( fruitListOrdered );

        } else {
            console.log('Ha llegado al final de la lista y no puede bajar mas');
        }
    }

    const reset = () => {
        setFruitsList( initialFruitList );
    }

    return {
        fruitList,
        handleDown,
        handleUp,
        reset
    };

}

useFruitHandler.propTypes = {
    initialFruitList: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
};