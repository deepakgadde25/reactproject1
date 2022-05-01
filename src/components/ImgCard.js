import React from 'react'

const ImgCard = (props) => {
  return (
    <>
    <img src={props.url} alt={props.name}/>
    <p style={{"color":"orange","fontWeight":"bold"}}>{props.name}</p>
    <p><strong>Rank:</strong>{props.rank}</p>
    <p><strong>Price in $</strong>{props.price}</p>
    <p><strong>MarketCap</strong>:{props.marketCap}</p>
    </>
  )
}

export default ImgCard