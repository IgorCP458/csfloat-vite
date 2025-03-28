import React from "react";
import ItemName from "./ItemName";
import ItemImage from "./ItemImage";
import ItemFooter from "./ItemFooter";
import type { CardProps } from "../../types";



const Card: React.FC<CardProps> = ({ listing }) => {
  return (
    <div className="bg-slate-800 shadow-lg rounded-lg w-60 h-120 flex flex-col pt-4 pl-2 pb-2">
      {/* Área que cresce automaticamente */}
      <div className="flex-grow">
        <div className="header">
          <ItemName 
            item_name={listing.item.market_hash_name} 
            wear_name={listing.item.wear_name} 
            is_stattrak={listing.item.is_stattrak}
            is_souvenir={listing.item.is_souvenir}
          />
        </div>
        <div className="image ">
          <ItemImage icon_url={listing.item.icon_url} />
        </div>
      </div>
        <div className="mt-auto">
          <ItemFooter price={listing.price} float={listing.item.float} />
        </div>
        
    </div>
  );
};

export default Card;
