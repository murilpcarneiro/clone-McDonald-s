"use client"

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const handleBackClick = () => router.back();
  const handleOrderClick = () => router.push(`/${slug}/orders`);

  return <div className="relative w-full min-h-[300px]">
    <Button variant="secondary" size="icon" className="absolute z-50 top-4 left-4 rounded-full bg-white" onClick={handleBackClick}>
      <ChevronLeftIcon />
    </Button>
    <Image src={product.imageUrl} alt={product.name} fill className="object-contain bg-slate-100" />
    <Button variant="secondary" size="icon" className="absolute z-50 top-4 right-4 rounded-full bg-white" onClick={handleOrderClick}>
      <ScrollTextIcon />
    </Button>
  </div>;
}


export default ProductHeader;