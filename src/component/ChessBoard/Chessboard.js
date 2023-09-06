import React, {useState, useEffect} from 'react';  
import '../ChessBoard/Chessboard.css'
import Tile from './Tile';
import Pawns from './Pawns';

function ChessBoard(props)
{  
    const xCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h", "0"];

    const yCoordinates = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    // const [coordinates, setCoordinates] = useState('a1');

    let index = 0 

    const coordinatesBoard = []; 

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
                    coordinatesBoard.push(<Tile tileType={"whiteTile"} key={tileKey}></Tile>);
                }
                else
                {
                    coordinatesBoard.push(<Tile tileType={"aquaTile"} key={tileKey}><img src='pieces/pawn_b.png' alt='ok'/></Tile>);
              
                }
            }
            index--
       
        }

        console.log(coordinatesBoard);
        return coordinatesBoard; 
    }
    

    return(<div className="App">
            {<RenderCoordinates/>}
            {<Pawns pawnType={"whitePawn"}></Pawns>}
            {<Pawns pawnType={"blackPawn"}></Pawns>}
            </div>)
    
}

export default ChessBoard; 
