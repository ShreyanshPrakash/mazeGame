import React, { useState } from 'react';
import { MarioIndexModel } from '../models';
import { Cell } from './Cell';



export function Board({
    dimensions = {},
    marioIndex = {},
    mushrooms = [],
}){

    const generateBoard = () => {

        let cells = [];

        for(let i = 1; i <= dimensions.height; i++){
            let rowCells = [];
            for( let j = 1; j <= dimensions.width; j++ ){
                let x = Math.floor(Math.random() * dimensions.height);
                let y = Math.floor(Math.random() * dimensions.width);
                rowCells.push(
                    <Cell
                        cellIndex={j}
                        isMario={marioIndex.hIndex === i && marioIndex.wIndex === j}
                        isMashroom={ mushrooms.filter( item => item.x === i && item.y === j).length > 0 }
                    />
                )
            }

            cells.push(
                <div key={i} className="row">{rowCells}</div>
            )

        }

        return cells;

    }


    return (
        <React.Fragment>

            {generateBoard()}
           
        </React.Fragment>
    )
}