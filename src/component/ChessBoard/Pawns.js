const WhitePawn = () =>
{
   return(
      <div className='whitePawn'><img src= "pieces/pawn_w.png" alt='whitePawn'/></div>
   )
}

const BlackPawn = () =>
{
   return(
      <div className='blackPawn'><img src='pieces/pawn_b.png' alt='blackPawn'/></div>
   )
}

const ENUM_PAWN_TYPE = 
{
   whitePawn: <WhitePawn/>,
   blackPawn: <BlackPawn/>,
};


function Pawns({pawnType}) 
{
   return ENUM_PAWN_TYPE[pawnType]
}

export default Pawns; 