import { CartActions } from "use-shopping-cart"
import { CartEntry as ICartEntry } from 'use-shopping-cart/core'
import { CartEntryContainer, CartEntryImage, CartEntryText } from "../styles/pages/cartModal"

interface CartEntryProps {
  entry: ICartEntry,
  removeItem: CartActions['removeItem']
}

export const CartEntry = ({ entry, removeItem}: CartEntryProps) => {

  return (
    <CartEntryContainer>
      <CartEntryImage>
        {entry.imageUrl ? (
          <img width={100} src={entry.imageUrl} alt={entry.description} />
        ) : null}
      </CartEntryImage>
      <CartEntryText>
        <h3>{entry.name}</h3>
        <p>{entry.formattedPrice}</p>
        <button onClick={() => removeItem(entry.id)}>Remove</button>
      </CartEntryText>
    </CartEntryContainer>
  )
}
/* Card2 */


