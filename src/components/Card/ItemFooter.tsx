import type { FC } from "react";
import type { ItemFooterInterface } from "../../types";

import FloatBar from "./FloatBar";

const ItemFooter: FC<ItemFooterInterface> = ({ price, float }) => {
  return (
    <div className="mt-auto w-full text-center">
      <h3 className="text-lg font-semibold mt-2">$ {(price / 100).toFixed(2)}</h3>

      
      {/* Barra de Float */}
      {
        float? (
          <>
          <FloatBar floatValue={float} />
          <p className="text-gray-600 text-sm">{(float).toFixed(4)}</p>
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