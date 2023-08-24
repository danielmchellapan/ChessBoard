import React, {useState, useEffect} from 'react';  
import '../ChessBoard/Chessboard.css'
import Tile from './Tile';
import Pawns from './Pawns';

function ChessBoard(props)
{  
    
    let board = props.board; 

    board = []; 

    const xCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h", "0"];

    const yCoordinates = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    // const [coordinates, setCoordinates] = useState('a1');

    let index = 0 

  


    const RenderCoordinates = () =>
    {
        for(let y = yCoordinates.length - 1; y > 0; y--)
        {
            for(let x = 0; x < xCoordinates.length - 1; x++)
            {       
                index++;

                const tileKey = `${xCoordinates[x]}${yCoordinates[y]}`;
                
                if(index % 2 === 1) 
                {
                    board.push(<Tile image={"whitePawn"} number={1} key={tileKey}></Tile>);
                }
                else
                {
                    board.push(<Tile image={"blackPawn"} number={2} key={tileKey}></Tile>);
              
                }
            }
            index--
       
        }

        console.log(board);
        return board;
    }
    


    return(<div className="App">
            {<RenderCoordinates/>}
            </div>)
    
}

export default ChessBoard; 
