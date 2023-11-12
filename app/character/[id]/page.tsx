"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackgroundCharacter from "./components/background";
import ImageCharacter from "./components/layout-info/image";
import Info from "./components/layout-info/info";

export default function ({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<any>();

  const fetchData = async () => {
    setLoading(true);
    await getItem();
    setLoading(false);
  };

  const getItem = async () => {
    try {
      let data = await fetch(`https://api.ambr.top/v2/vi/avatar/${params.id}`);
      if (data.status === 200) {
        let res = await data.json();
        if (Object.keys(res.data).length > 0) {
          setItem(res.data);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="background">
      <BackgroundCharacter item={item} />
      <div className="content-item wrap">
        <Info item={item} />
      </div>
    </div>
  );
}
