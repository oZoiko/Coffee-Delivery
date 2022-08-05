import { CartItemDisplay } from "../../../../components/CartItemDisplay/CartItemDisplay";
import { ConfirmOrderContainer, ConfirmOrderWrapper, OrderViewer } from "./styles";
import { MenuItems } from "../../../../data/Menu/MenuItems";
import { ShoppingCartContext } from "../../../../App";
import { useContext } from "react";

export function ConfirmOrder() {
  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <ConfirmOrderContainer>
      <h1
        className="checkout-title"
      >
        Confirme seu pedido
      </h1>
      <ConfirmOrderWrapper>
        <button type="submit">Submit debug</button>
        <OrderViewer>
          {shoppingCart.map((item, index) => {
            if (item.quantity > 0) {
              return (
                <>
                  <CartItemDisplay
                    key={index}
                    productsData={MenuItems}
                    productId={item.id}
                    amountOfProducts={item.quantity}
                  />
                  <hr/>
                </>
              )
            }
          })}
        </OrderViewer>
      </ConfirmOrderWrapper>
    </ConfirmOrderContainer>
  )
}