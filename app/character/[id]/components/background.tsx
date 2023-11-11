"use client";

import Image from "next/image";

const BackgroundCharacter = ({ item }: { item: any }) => {
  const getUrlGacha = () => {
    if (item?.icon) {
      let icon: string = item.icon;
      let name = icon.substring(icon.indexOf("UI_AvatarIcon_") + 14);

      return `https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${name}.png`;
    }
    return null;
  };

  getUrlGacha();

  return (
    <>
      {getUrlGacha() != null ? (
        <Image
          src={getUrlGacha()!}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default BackgroundCharacter;
