import type { CardProps } from "@/types";

const DialogListing: React.FC<CardProps> = ({listing}) => {
  return(
    <div className="dialog_listing">
      <div className="dialog_image">
        <img src={'https://community.cloudflare.steamstatic.com/economy/image/' + listing.item.icon_url} alt="Imagem do Item" />
      </div>
      <div className="dialog_desc"></div>
  </div>
  )

}

export default DialogListing;