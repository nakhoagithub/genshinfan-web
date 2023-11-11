"use client";
import React, { useEffect, useState } from "react";
import Layout, { Content as ContentAnt } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { App, Drawer } from "antd";
import { usePathname } from "next/navigation";
import Menu from "../menu/menu";

const Content = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const isViewMenu = () => {
    return true;
  };

  return (
    <Layout>
      {isViewMenu() && (
        <Sider
          width={240}
          theme="dark"
          collapsible
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
        >
          <Menu />
        </Sider>
      )}
      <ContentAnt>{children}</ContentAnt>
    </Layout>
  );
};

export default Content;
