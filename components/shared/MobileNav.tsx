import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            {/* SheetTrigger là cái đối tượng mà mình sử dụng để kích hoạt cái sheet */}
            <SheetTrigger className="align-middle">
                <Image src='/assets/icons/menu.svg' alt='menu' width={24} height={24} className="cursor-pointer"/>
            </SheetTrigger>
            {/* Nội dung của cái sheet */}
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image src='/assets/images/logo.svg' alt='logo' width={128} height={38}/>
                {/* Tạo 1 đường phân cách */}
                <Separator className="border border-gray-50" />
                {/* Các Item nằm trong sheet */}
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav