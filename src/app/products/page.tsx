import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return <div className="p-5 border border-red-500 rounded-xl">
    <h1 className="text-red-500 p-5">Products Page</h1>
    <Button>Teste</Button>
    <Input placeholder="Teste" />
  </div>;
}

export default ProductPage;