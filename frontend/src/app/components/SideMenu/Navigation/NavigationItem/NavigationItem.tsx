'use client';

import Link from "next/link";
import { NavigationItemType } from "./Types";
import { usePathname } from "next/navigation";

const NavigationItem: React.FC<NavigationItemType> = ({ id, name, icon, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      key={id}
      href={href}
      className={`flex items-center py-4 px-4 gap-2 hover:bg-[rgba(-88,90,170,1)]
        ${isActive && "bg-[rgba(-88,122,170,1)]"}`}
    >
      <span>{icon}</span>
      <span className="text-white text-md font-medium">{name}</span>
    </Link>
  );
}

export default NavigationItem;
