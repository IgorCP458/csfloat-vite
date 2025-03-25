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
  listingId: string,
  state: string,
  price: string
  item: itemType,
}

export interface Listing {
  listing: CardProps
}
