export interface itemType {
  rarity_name: string,
  market_hash_name: string,
  icon_url: string,
  is_stattrak: boolean,
  is_souvenir: boolean,
  item_name: string,
  wear_name: string,
  type: string,
  float: number,
}

export interface CardProps {
    listing: Listing
}

export interface Listing {
  listingId: string;
  state: string | null;
  price: number;
  seller: string | null;
  item: itemType;
}

export interface ItemFooterInterface {
  price: number;
  float: number;
}