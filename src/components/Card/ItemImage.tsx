import type { FC } from "react";
import './Card.css'

interface ItemImageInterface {
  icon_url: string
}

const ItemImage: FC<ItemImageInterface> = ({icon_url}) => {
  return(
    <div className="w-[100%] cursor-pointer">
      <div className="container">
        <img src={'https://community.cloudflare.steamstatic.com/economy/image/' + icon_url} alt="Produto" className="w-full h-40 object-cover rounded-md item-img" />
      </div>
    </div>
  )
}

export default ItemImage