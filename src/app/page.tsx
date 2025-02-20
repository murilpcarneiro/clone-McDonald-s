import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (<h1 className="h-dvh w-full"><Button asChild><Link href={"/fsw-donalds"}>Clique Aqui!</Link></Button></h1>);
}

export default HomePage;