import { getUrlElement, getUrlBg, getUrlWeapon } from "@/utils/tool";
import Image from "next/image";

const ItemCharacter = ({
  title,
  rank,
  element,
  weaponType,
  icon,
  onClick,
}: {
  title: string;
  rank?: number;
  element?: string;
  weaponType?: string;
  icon?: string;
  onClick: () => void;
}) => {
  return (
    <div className="item" onClick={onClick}>
      <Image
        className="background"
        src={getUrlBg(rank)}
        alt="Background"
        height={121.5}
        width={100}
      />
      <Image
        className="image"
        src={`https://api.ambr.top/assets/UI/${icon}.png`}
        alt="Background"
        height={100.2}
        width={100}
      />
      <div className="title">{title}</div>
      {getUrlElement(element) && (
        <div className="element">
          <Image
            style={{ position: "absolute" }}
            src={getUrlElement(element)!}
            alt="Element"
            height={24}
            width={24}
          />
        </div>
      )}
      {getUrlWeapon(weaponType) && (
        <div className="weapon">
          <Image
            style={{ position: "absolute" }}
            src={getUrlWeapon(weaponType)!}
            alt="Weapon"
            height={24}
            width={24}
          />
        </div>
      )}
    </div>
  );
};

export default ItemCharacter;
