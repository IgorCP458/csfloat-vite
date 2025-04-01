import React from "react";
import ItemName from "./ItemName";
import ItemImage from "./ItemImage";
import ItemFooter from "./ItemFooter";
import type { CardProps } from "../../types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DialogListing from "../Dialog/DialogListing";


const Card: React.FC<CardProps> = ({ listing }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* ✅ Agora o Card inteiro é o trigger do modal */}
        <div className="bg-slate-800 shadow-lg rounded-lg w-60 h-120 flex flex-col pt-4 pl-2 pb-2 cursor-pointer">
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
            <div className="image">
              <ItemImage icon_url={listing.item.icon_url} />
            </div>
          </div>
          <div className="mt-auto">
            <ItemFooter price={listing.price} float={listing.item.float} />
          </div>
        </div>
      </DialogTrigger>

      {/* ✅ Modal agora funciona corretamente */}
      <DialogContent className="bg-transparent backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md w-full text-white h-200">
        <DialogHeader>
          <DialogTitle className={'item-name text-[13px] ' + (listing.item.is_stattrak? 'text-[#ff782c]' : (listing.item.is_souvenir? 'text-[#e0e051]' : 'text-[#fff]'))}>{listing.item.market_hash_name}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
          <DialogListing listing={listing}></DialogListing>

        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Card;
