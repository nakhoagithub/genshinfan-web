export const getUrlBg = (rank?: number) => {
  if (rank === 5) {
    return "/icons/bg5s.png";
  }
  if (rank === 4) {
    return "/icons/bg4s.png";
  }
  if (rank === 3) {
    return "/icons/bg3s.png";
  }
  if (rank === 2) {
    return "/icons/bg2s.png";
  }
  return "/icons/bg1s.png";
};

export const getUrlStar = (rank?: number) => {
  if (rank === 5) {
    return "/icons/ic_5s.png";
  }
  if (rank === 4) {
    return "/icons/ic_4s.png";
  }
  if (rank === 3) {
    return "/icons/ic_3s.png";
  }
  if (rank === 2) {
    return "/icons/ic_2s.png";
  }
  return "/icons/ic_1s.png";
};

export const getUrlElement = (element?: string) => {
  if (element === "Electric") {
    return "/icons/element_electro.png";
  }
  if (element === "Wind") {
    return "/icons/element_anemo.png";
  }
  if (element === "Fire") {
    return "/icons/element_pyro.png";
  }
  if (element === "Rock") {
    return "/icons/element_geo.png";
  }
  if (element === "Water") {
    return "/icons/element_hydro.png";
  }
  if (element === "Ice") {
    return "/icons/element_cryo.png";
  }
  if (element === "Grass") {
    return "/icons/element_dendro.png";
  }
  return null;
};

export const getUrlWeapon = (weaponType?: string) => {
  if (weaponType === "WEAPON_SWORD_ONE_HAND") {
    return "/icons/UI_GachaTypeIcon_Sword.png";
  }
  if (weaponType === "WEAPON_CATALYST") {
    return "/icons/UI_GachaTypeIcon_Catalyst.png";
  }
  if (weaponType === "WEAPON_BOW") {
    return "/icons/UI_GachaTypeIcon_Bow.png";
  }
  if (weaponType === "WEAPON_POLE") {
    return "/icons/UI_GachaTypeIcon_Pole.png";
  }
  if (weaponType === "WEAPON_CLAYMORE") {
    return "/icons/UI_GachaTypeIcon_Claymore.png";
  }
  return null;
};
