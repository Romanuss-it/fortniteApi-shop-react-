function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props

  const finalPrice = price.finalPrice
  return (
    <div className="card" key={mainId}>
      <div className="card-image">
        {" "}
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>

      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              finalPrice,
            })
          }
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.3rem" }}>
          {finalPrice} V-bucks
        </span>
      </div>
    </div>
  )
}

export { GoodsItem }
