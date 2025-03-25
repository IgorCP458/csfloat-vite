import React from "react";
import ItemName from "./ItemName";
import ItemImage from "./ItemImage";
import ItemFooter from "./ItemFooter";
import type { Listing } from "../../types";



const Card: React.FC<Listing> = ({ listing }) => {
  return (
    <div className="bg-slate-800 shadow-lg rounded-lg w-60 h-100 flex flex-col pt-4 pl-2 pb-2">
      {/* Área que cresce automaticamente */}
      <div className="flex-grow">
        <div className="header">
          <ItemName 
            item_name={listing.hash_name} 
            wear_name={listing.wear_name} 
            is_stattrak={listing.item.is_stattrak}
            is_souvenir={listing.item.is_souvenir}
          />
        </div>
        <div className="image ">
          <ItemImage icon_url={"listing.icon_url"} />
        </div>
      </div>
        <div className="mt-auto">
          <ItemFooter price={listing.price} item={listing} />
        </div>
        
    </div>
  );
};

export default Card;


//rgba(27, 29, 36, 0) 20%, rgba(235, 75, 75, 0.32) 100%