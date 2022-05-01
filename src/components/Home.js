import React from 'react'
import axios from 'axios';
import ImgCard from './ImgCard';
const Home = () => {
    const[search,setSearch]=React.useState('');
    const[data,setData]=React.useState([]);
    const handler=e=>
    {
        setSearch(e.target.value);
    }
    React.useEffect(()=> {
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100').then(
            res => setData(res.data.coins)
        )
    },[])
  return (
<>

    <div className='header'>
        <input value={search} onChange={handler} placeholder='search here'/>
    <h5 style={{"fontFamily":"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","margin-left":"-150vh","color":"white","marginTop":"-45px","fontSize":"30px",}}>Cryptoprizes</h5>
</div>
{
    data.length>0 &&
    <div className='grid-container'>
        {
            data.filter(crypto=>
                crypto.name.toLowerCase().includes(search.toLowerCase())
                ).
            map(crypto=>
               <div>
                    <ImgCard
                name={crypto.name}
                rank={crypto.rank}
                price={crypto.price}
                marketCap={crypto.marketCap}
                key={crypto.id}
                url={crypto.icon}
                />
                   </div>
                ) }
                 </div>

}
    </>
  )
}

export default Home