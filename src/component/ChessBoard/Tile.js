import './Tile.css';
  
const WhiteTile = () =>
{
   return(
      <div className='TileWhite'></div>
   )
}

const AquaTile = () =>
{
   return(
      <div className='TileAqua'></div>
   )
}

const ENUM_TILE_TYPE = 
{
   whiteTile: <WhiteTile/>,
   aquaTile: <AquaTile/>,
};


function Tile({tileType}) 
{
   return ENUM_TILE_TYPE[tileType]
}

export default Tile;
