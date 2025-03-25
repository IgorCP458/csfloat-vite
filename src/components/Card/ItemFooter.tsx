import type { FC } from "react";
import type { CardProps } from "../../types";

// const ItemFooter: FC<CardProps> = ({price, item}) => {
//   return(
//     <>
//       <div className="priceRow">
//       <h3 className="text-lg font-semibold mt-2">$ {(price / 100).toFixed(2)}</h3>
        
      
//       </div>
//       <div className="itemFloatBar">
//         <p className="text-gray-600 text-sm">{(item.type == 'skin'? ('Float: ' + item.float_value): (<br></br>))}</p>
//       </div>
//       <div className="action">
//         <button className="mt-3 w-[50%] bg-slate-900 text-white py-2 rounded-md hover:bg-slate-950 transition">
//           Comprar
//         </button>
//       </div>
//     </>
//   )
// }

import FloatBar from "./FloatBar";

const ItemFooter: FC<CardProps> = ({ price, item }) => {
  return (
    <div className="mt-auto w-full text-center">
      <h3 className="text-lg font-semibold mt-2">$ {(price / 100).toFixed(2)}</h3>

      
      {/* Barra de Float */}
      {
        item.float_value? (
          <>
          <FloatBar floatValue={item.float_value} />
          <p className="text-gray-600 text-sm">{(item.float_value).toFixed(4)}</p>
          </>
        ) : (
          <br></br>
        )
      }
      

      <button className="mt-3 w-[50%] bg-slate-900 text-white py-2 rounded-md hover:bg-slate-950 transition">
        Comprar
      </button>
    </div>
  );
};

export default ItemFooter;