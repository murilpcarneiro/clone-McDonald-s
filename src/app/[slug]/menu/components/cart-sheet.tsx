import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products, totalCartPrice } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart} >
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="py-5 flex flex-col flex-auto h-full">
          <div className="flex-auto space-y-3">
            {products.map(product =>
              <CartItem key={product.id} product={product} />
            )}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="font-semibold text-sm">{formatCurrency(totalCartPrice)}</p>
              </div>
            </CardContent>
          </Card>
          <Button className="w-full rounded-full">Finalizar Pedido</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;