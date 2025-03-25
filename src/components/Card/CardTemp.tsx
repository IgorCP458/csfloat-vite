import React from "react";
import ItemName from "./ItemName";
import ItemImage from "./ItemImage";
import ItemFooter from "./ItemFooter";
import type { CardProps, itemType } from "../../types";



const CardTemp: React.FC<CardProps> = ({ itemID, price }) => {
  return (
    <div className="bg-slate-800 shadow-lg rounded-lg w-60 h-100 flex flex-col pt-4 pl-2 pb-2">
      {/* Área que cresce automaticamente */}
      <div className="flex-grow">
        <div className="header">
          {itemID}
        </div>
        <div className="image ">
          {price}
        </div>
      </div>
        <div className="mt-auto">

        </div>
        
    </div>
  );
};

const Carde: React.FC<CardProps> = ({ item, price }) => {
  return (
    <div className="bg-slate-800 shadow-lg rounded-lg w-60 h-100 flex flex-col p-4">
      {/* Conteúdo principal */}
      <div className="flex-grow">
        <div className="header">
          <ItemName 
            is_stattrak={item.is_stattrak} 
            is_souvenir={item.is_souvenir} 
            item_name={item.item_name} 
            wear_name={item.wear_name} 
          />
        </div>
        <div className="image">
          <ItemImage icon_url={item.icon_url} />
        </div>
      </div>

      {/* ✅ Footer empurrado para baixo */}
      <div className="mt-auto">
        <ItemFooter price={price} item={item} />
      </div>
    </div>
  );
};

export default CardTemp;


//rgba(27, 29, 36, 0) 20%, rgba(235, 75, 75, 0.32) 100%