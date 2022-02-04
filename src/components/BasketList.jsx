import { BasketItem } from "./BasketItem"
import { useContext } from "react"
import { ShopContext } from "../context"

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext)

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity
  }, 0)

  //71
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item ">Cart is empty</li>
      )}

      <li className="collection-item active">Price: {totalPrice} V-bucks</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  )
}

export { BasketList }
