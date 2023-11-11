import Image from "next/image";

const ImageCharacter = ({ item }: { item: any }) => {
  const getUrlIcon = () => {
    if (item?.icon) {
      let icon: string = item.icon;
      return `https://api.ambr.top/assets/UI/${icon}.png`;
    }
    return null;
  };

  return (
    <div className="column">
      {getUrlIcon() != null ? (
        <div style={{ backgroundColor: "#c87c24", borderRadius: "100px" }}>
          <Image
            style={{ borderRadius: "100px" }}
            src={getUrlIcon()!}
            alt="Background"
            height={180}
            width={180}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageCharacter;
