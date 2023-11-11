"use client";
import React from "react";
import { Button, Col, Divider, Flex, Row, Space, Tooltip } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import { GithubOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import { Grid } from "antd";
import Image from "next/image";
const { useBreakpoint } = Grid;

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const screens = useBreakpoint();

  function isLoginPage() {
    return pathname.startsWith("/login");
  }

  return (
    <AntHeader
      style={{
        padding: "0 16px",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col flex={3}>
          <Row align="middle">
            {screens.lg === false && (
              <Button type="link" icon={<MenuOutlined />} />
            )}
            <Image
              style={{ marginLeft: "10px" }}
              src={"/assets/ic_launcher.png"}
              height={40}
              width={40}
              alt="Logo"
            />
            <div className="logo-title">Genshin Fan</div>
          </Row>
        </Col>
        <Col flex={2} className="column justify-center">
          {!isLoginPage() && (
            <Row justify="end" align="middle">
              <Space>
                <a target="_blank" href="https://github.com/nakhoagithub">
                  <Tooltip title="Github">
                    <Button type="link" icon={<GithubOutlined />} />
                  </Tooltip>
                </a>
              </Space>
            </Row>
          )}
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
