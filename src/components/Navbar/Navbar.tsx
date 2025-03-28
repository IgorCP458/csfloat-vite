import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [currency, setCurrency] = useState("USD");

  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Esquerda - Market */}
      <div className="text-xl font-bold">Market</div>
      
      {/* Direita - Moeda e Login */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-black bg-slay-900 border-white">
              {currency}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
            {["USD", "BRL", "CNY"].map((curr) => (
              <DropdownMenuItem key={curr} onClick={() => setCurrency(curr)}>
                {curr}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button className="bg-blue-600 hover:bg-blue-700">Login</Button>
      </div>
    </nav>
  );
}
