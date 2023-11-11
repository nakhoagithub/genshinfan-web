"use client";
import React, { useEffect, useState } from "react";
import { Menu as MenuAnt, MenuProps } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/${e.key}`);
  };

  function getDefaultSelectKey() {
    const selectKeys: string[] = [];
    selectKeys.push(searchParams.get("menu")?.toString() ?? "");
    return selectKeys;
  }
  const sizeIcon = 30;

  const items: MenuItem[] = [
    getItem(
      "Character",
      "character",
      <Image
        src="/icons/UI_HomeWorldTabIcon_2_Character.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Weapon",
      "weapon",
      <Image
        src="/icons/UI_TheatreMechanicus_Icon_Mechanism.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Teyvat's Resource",
      "resource",
      <Image
        src="/icons/UI_Icon_Activity_DoubleReward.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Artifact",
      "artifact",
      <Image
        src="/icons/UI_BtnIcon_RelicType1.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Domain",
      "domain",
      <Image
        src="/icons/UI_BtnIcon_DungeonFactor.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Food",
      "food",
      <Image
        src="/icons/UI_Icon_Activity_FoodDelivery.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Enemy",
      "enemy",
      <Image
        src="/icons/UI_HomeWorldTabIcon_2_Monsterhouse.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Animal",
      "animal",
      <Image
        src="/icons/UI_HomeWorldTabIcon_2_Animals.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Achievement",
      "achievement",
      <Image
        src="/icons/UI_AchiementIcon.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Namecard",
      "namecard",
      <Image
        src="/icons/UI_BtnIcon_NameCard.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Craf",
      "craf",
      <Image
        src="/icons/UI_Icon_Intee_Combine.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Outfit",
      "outfit",
      <Image
        src="/icons/UI_BtnIcon_AvatarList.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Geography",
      "geography",
      <Image
        src="/icons/ic_map1.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
    getItem(
      "Windglider",
      "windglider",
      <Image
        src="/icons/UI_Icon_Activity_FleurFair_FallGame.png"
        alt="Icon character"
        width={sizeIcon}
        height={sizeIcon}
      />
    ),
  ];

  return (
    <MenuAnt
      className="h-100p overflow"
      theme="dark"
      onClick={onClick}
      selectedKeys={getDefaultSelectKey()}
      mode="vertical"
      items={items}
    />
  );
};

export default Menu;
