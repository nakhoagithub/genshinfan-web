"use client";
import HeaderContent from "@/components/header-content/header-content";
import GridCharacter from "./components/grid-character";
import { useEffect, useState } from "react";

export default function () {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<any>([]);
  const [types, setTypes] = useState<any>([]);

  const fetchData = async () => {
    setLoading(true);
    await getCharacters();
    setLoading(false);
  };

  const getCharacters = async () => {
    try {
      let data = await fetch(`https://api.ambr.top/v2/vi/avatar`);
      if (data.status === 200) {
        let res = await data.json();
        if (Object.keys(res.data.items).length > 0) {
          let newItems = [];
          for (var key of Object.keys(res.data.items)) {
            newItems.push(res.data.items[key]);
          }
          setItems(newItems);
        }
      }
    } catch (error) {
      alert(`${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <GridCharacter items={items} />
      {/* <div style={{ backgroundColor: "black", height: "10000px" }}>a</div> */}
    </div>
  );
}
