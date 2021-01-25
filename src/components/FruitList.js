import React from 'react';
import fruits from '../data/fruits';
import { useFruitHandler } from '../hooks/useFruitHandler';

import styled from 'styled-components';

const StyledFruitList = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const StyledFruitRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    border-style: groove;
`

const ColumnNumber = styled(Column)`
    flex: 0 0 3rem;
`

const Button = styled.button`
    height: ${props => props.reset ? "100%" : "50%"};

    font-size: 1em;
`;

export const FruitList = () => {

    const { fruitList, handleUp, handleDown, reset } = useFruitHandler( fruits );

    return (
        <StyledFruitList>
            {
                fruitList.map( 
                    ( info, index ) => (

                        <StyledFruitRow key={ info.id }>

                            <ColumnNumber>
                                <p>{ info.id }</p>
                            </ColumnNumber>

                            <Column>
                                <h3>{ info.name }</h3>
                            </Column>
                           
                            <Column>
                                <Button 
                                    onClick={ () => handleUp( index )  }
                                >
                                    ▲
                                </Button>
                                <Button 
                                    onClick={ () => handleDown( index ) }
                                >
                                    ▼
                                </Button>
                            </Column>
                        
                        </StyledFruitRow>
                    )
                )
            }

            <Button reset
                onClick={ reset }
            >
                Reset
            </Button>
        </StyledFruitList>
    )
}