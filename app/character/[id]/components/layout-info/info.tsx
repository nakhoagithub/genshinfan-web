import { Col, Divider, Row } from "antd";
import ImageCharacter from "./image";
import Image from "next/image";
import { getUrlElement, getUrlStar, getUrlWeapon } from "@/utils/tool";

const LayoutInfo = ({ item }: { item: any }) => {
  const spanHeader = 8;
  const spanContent = 16;

  return (
    <div>
      <div className="layout-info align-center">
        <ImageCharacter item={item} />
        <div className="title-name">{item?.name}</div>

        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Độ hiếm: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            <div
              style={{ width: "100%", height: "25px", position: "relative" }}
            >
              <Image
                alt="Star"
                src={getUrlStar(item?.rank)}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Col>
        </Row>
        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Nguyên tố: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            {getUrlElement(item?.element) && (
              <div
                style={{ width: "100%", height: "25px", position: "relative" }}
              >
                <Image
                  alt="Element"
                  src={getUrlElement(item?.element)!}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          </Col>
        </Row>
        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Vũ khí: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            {getUrlWeapon(item?.weaponType) && (
              <div
                style={{ width: "100%", height: "25px", position: "relative" }}
              >
                <Image
                  alt="Weapon"
                  src={getUrlWeapon(item?.weaponType)!}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          </Col>
        </Row>
        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Sinh nhật: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            <div
              className="column align-center"
              style={{ width: "100%", position: "relative" }}
            >
              {item?.birthday[1]}/{item?.birthday[0]}
            </div>
          </Col>
        </Row>
        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Tên hiệu: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            <div
              className="column align-center"
              style={{ width: "100%", position: "relative" }}
            >
              {item?.fetter?.title}
            </div>
          </Col>
        </Row>
        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Cung mệnh: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            <div
              className="column align-center"
              style={{ width: "100%", position: "relative" }}
            >
              {item?.fetter?.constellation}
            </div>
          </Col>
        </Row>

        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Thuộc: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            <div
              className="column align-center"
              style={{ width: "100%", position: "relative" }}
            >
              {item?.fetter?.native}
            </div>
          </Col>
        </Row>
        <Row className="item-info" style={{ width: "100%" }}>
          <Col className="item-info-header" span={spanHeader}>
            <div>Thông tin: </div>
          </Col>
          <Col className="item-info-content" span={spanContent}>
            <div
              className="column align-center"
              style={{ width: "100%", position: "relative" }}
            >
              {item?.fetter?.detail}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LayoutInfo;
