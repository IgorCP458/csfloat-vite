import type { FC } from "react"

interface ItemNameInterface {
  is_stattrak: boolean,
  is_souvenir: boolean,
  item_name: string,
  wear_name: string,
}

const ItemName: FC<ItemNameInterface> = ({is_stattrak, is_souvenir, item_name, wear_name}) => {
  return(
    <div className={"container cursor-pointer justify-items-start pl-4 pt-2"}>
      <div className={'item-name text-[13px] ' + (is_stattrak? 'text-[#ff782c]' : (is_souvenir? 'text-[#e0e051]' : 'text-[#fff]'))}>{item_name}</div>
      <div className="subText text-[11px] pt-[4px] text-stone-400 pl-1 pb-8">
        {(is_stattrak? <span className="text-[#ff782c]">StatTrak </span>: (is_souvenir? <span className="text-[#e0e051]">Souvenir </span>: ''))}
        {wear_name}
      </div>
    </div>
  )
}

export default ItemName
