"use client";

import { List, Space } from "antd";
import ItemCharacter from "./item-character";
import { usePathname, useRouter } from "next/navigation";

const GridCharacter = ({ items }: { items: any[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="wrap">
      {...items.map((item: any, index: number) => (
        <ItemCharacter
          key={index}
          title={item.name ?? ""}
          element={item.element}
          icon={item.icon}
          rank={item.rank}
          weaponType={item.weaponType}
          onClick={() => {
            router.push(`${pathname}/${item.id ?? ""}`);
          }}
        />
      ))}
    </div>
  );
};

export default GridCharacter;
