import './Tile.css';
  
const pieces = 
{
   "whitePawn": "pieces/pawn_w.png",
   "blackPawn": "pieces/pawn_b.png",
   "kingWhite": "pieces/pawn_b.png",
   "kingBlack": "pieces/pawn_b.png",
   "knightWhite": "pieces/pawn_b.png",
   "knightBlack": "pieces/pawn_b.png",
   "bishopWhite": "pieces/pawn_b.png",
   "bishopBlack": "pieces/pawn_b.png",
   "queenWhite": "pieces/pawn_b.png",
   "queenBlack": "pieces/pawn_b.png",
   "rookWhite": "pieces/pawn_b.png",
   "rookBlack": "pieces/pawn_b.png",
}

let image = null;
let number = 0;  

function Tile(props) 
{
   if(props.piece) image = pieces(props.piece);
   number = props.number;

   if(number % 2 === 0)
   {
      return(
         <div className='TileAqua'>{image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'/>}</div>
      )
   }
   else
   {
      return(
         <div className='TileWhite'>{image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'/>}</div>
      )
   }
}

export default Tile;
