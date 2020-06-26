import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import IMAGES from "../../../constants/constants";

TopHotel.propTypes = {};

function TopHotel(props) {
  return (
    <Container className="mt-5">
      <h4 className="text-center mb-4">Khám phá thêm nhà cho thuê du lịch</h4>
      <Row>
        <Col>
          <Card className="card">
            <CardImg
              top
              height="150px"
              width="100%"
              src={IMAGES.hotel1}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="font-weight-bold">Căn hộ</CardTitle>
              <CardSubtitle className="small">8.801 chỗ nghỉ</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <CardImg
              top
              height="150px"
              width="100%"
              src={IMAGES.hotel2}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="font-weight-bold">Nhà cho thuê</CardTitle>
              <CardSubtitle className="small">8.801 chỗ nghỉ</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <CardImg
              top
              height="150px"
              width="100%"
              src={IMAGES.hotel3}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="font-weight-bold">
                Các biệt thự tư nhân
              </CardTitle>
              <CardSubtitle className="small">8.801 chỗ nghỉ</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <CardImg
              top
              height="150px"
              width="100%"
              src={IMAGES.hotel4}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className="font-weight-bold">Nhà trệt</CardTitle>
              <CardSubtitle className="small">8.801 chỗ nghỉ</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TopHotel;
