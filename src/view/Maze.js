import React, { useCallback, useEffect, useState } from 'react';
import { BoardDimensionsModel, GameStatsModel, MarioIndexModel } from '../models/board';

import {
    Board,
    GameStats,
    Modal,
    UserInput,
} from './../components';


export function Maze(){

    const [boardDimensions, setBoardDimensions] = useState(new BoardDimensionsModel());
    const [marioIndex, setMarioIndex] = useState(new MarioIndexModel());
    const [mushrooms, setMushrooms] = useState([]);
    const [gameStats, setGameStats] = useState(new GameStatsModel());


    useEffect( () => {
        if(boardDimensions.height){
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [marioIndex, mushrooms])

    useEffect( () => {
        const {
            height,
            width,
        } = boardDimensions;

        setMarioIndex({
            hIndex: Math.ceil(height/2),
            wIndex: Math.ceil(width/2),
        })


        let mushrooms = [];
        for(let i = 1; i <= Math.floor((height + width)/2); i++){
            let x = Math.floor(Math.random() * height) || 1;
            let y = Math.floor(Math.random() * width) || 1;
            if(!mushrooms.filter( item => item.x === x && item.y === y).length){
                mushrooms.push({x,y});
            }
        }

        setMushrooms(mushrooms);
        setGameStats(state => {
            return {
                ...state,
                moves: 0,
                mushroomsLeft: mushrooms.length
            }
        })

    }, [boardDimensions])


    const handleKeyDown = ({key}) => {

        let hIndex = marioIndex.hIndex;
        let wIndex = marioIndex.wIndex;

        switch(key){


            case "ArrowUp": {
                if(hIndex - 1){
                    hIndex = hIndex - 1;
                }
                break;
            }

            case "ArrowDown": {
                if(hIndex < boardDimensions.height){
                    hIndex = hIndex + 1;
                }
                break;
            }

            case "ArrowLeft": {
                if(wIndex - 1){
                    wIndex--;
                }
                break;
            }

            case "ArrowRight": {
                if(wIndex < boardDimensions.width){
                    wIndex++;
                }
                break;
            }

            default: {

            }

        }

        setMarioIndex({hIndex, wIndex});
        let mushroomsLeft = mushrooms.filter( item => !(item.x === hIndex && item.y === wIndex));
        setMushrooms(mushroomsLeft);
        setGameStats(state => {
            return {
                ...state,
                moves: state.moves++,
                mushroomsLeft: mushroomsLeft.length
            }
        })

    }

    useEffect(() => {
        console.log("Mario Idnex --------> ", marioIndex);
        console.log("Dimensions ########>", boardDimensions);
        console.log("Stats *******>", gameStats);
    }, [marioIndex])


    const handleUserInputSubmit = (input) => {
        setBoardDimensions(input);
    }

    return (
        <React.Fragment>
            <UserInput
                userInputSubmit={handleUserInputSubmit}
            />

            <GameStats
                stats={[
                    {title: "Mushrooms Left", value: gameStats.mushroomsLeft},
                    {title: "Moves", value: gameStats.moves}
                ]}
            />
            {
                boardDimensions.height > 0 && boardDimensions.width > 0 &&
                <Board
                    dimensions={boardDimensions}
                    marioIndex={marioIndex}
                    mushrooms={mushrooms}
                />
            }

            {
                gameStats.mushroomsLeft === 0 && gameStats.moves > 0 &&
                <Modal
                    message={`You have completed the mario maze in ${gameStats.moves} moves only`}
                />
            }
        </React.Fragment>
    )
}