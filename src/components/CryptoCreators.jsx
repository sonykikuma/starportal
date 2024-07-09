

const CryptoCreators = ()=>{

  const crypto=[
    {image:"https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
     title:"How to plan your retirement with crypto?"},
      {image:"https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
       title:"Why are there limited Bitcoin?"},    {image:"https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
       title:"How does Uniswap actually work?"},    {image:"https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
       title:"How to spot crypto projects to invest in?"},
  ]

  return(<div className="container py-5">
    <div className="text-center">
  <h3 className="text-light">Top Crypto Creators</h3>
      <p className="text-secondary">Answers to your crypto doubts, straight from the experts
</p>
      <div className="row">
        {crypto.map((item,index)=>(
    <div key={index} className="col-md-3 mb-2">
      <div className="card rounded-4">
        <img src={item.image} className="card-img" alt="..."/>
        <div className="card-img-overlay" style={{ display: 'flex', alignItems:'flex-end',  padding: '1rem'
}}>
          <h3 className="card-title text-light mt-10" style={{ marginBottom: '0'}}>{item.title}
    </h3>
        </div>
      </div>
    </div>

        ))}
      </div>
      </div>
  </div>)
}
 export default CryptoCreators