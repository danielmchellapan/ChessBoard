import React from 'react';  
import '../ChessBoard/Chessboard.css'
import Tile from './Tile';
// import Pawn from '../component/pieces/pawn_w.png'

function ChessBoard()
{  
    const xCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h", "0"];


    const yCoordinates = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    let index = 0 

    const coordinatesBoard = []; 

    const RenderCoordinates = () =>
    {
        for(let y = yCoordinates.length - 1; y > 0; y--)
        {
            for(let x = 0; x < xCoordinates.length - 1; x++)
            {       
                index++;
                
                if(index % 2 === 1)
                {
                    coordinatesBoard.push(<Tile tileType={"whiteTile"} key={`${xCoordinates[x]}${yCoordinates[y]}`}>{'b'}</Tile>);
                }
                else
                {
                    coordinatesBoard.push(<Tile tileType={"aquaTile"} key={`${xCoordinates[x]}${yCoordinates[y]}`}>{'a'}</Tile>);
              
                }
            }
            index--
       
        }
        return coordinatesBoard; 
    }
    
    
    return(<div className="App">
            {<RenderCoordinates/>}
            </div>)
    
}

export default ChessBoard; 
