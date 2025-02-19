"use client"
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantMenuHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}


const HeaderComponent = ({ restaurant }: RestaurantMenuHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();

  return (<div className="relative h-[250px] w-full">
    <Button onClick={handleBackClick} variant="secondary" size="icon" className="absolute z-50 top-4 left-4 rounded-full">
      <ChevronLeftIcon />
    </Button>
    <Button variant="secondary" size="icon" className="absolute z-50 top-4 right-4 rounded-full">
      <ScrollTextIcon />
    </Button>
    <Image src={restaurant?.coverImageUrl} alt={restaurant?.name} fill className="object-cover" />
  </div>);
}

export default HeaderComponent;