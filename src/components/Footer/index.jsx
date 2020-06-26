import React from "react";
import "./Footer.css";
Footer.propTypes = {};

function Footer(props) {
  return (
    <footer id="footer">
      <div className="footer__center">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-5">
              <div className="widget widget_logo">
                <div className="widget-logo">
                  <h4 className="widget-title">Thông tin</h4>
                  <div className="text">
                    <p>
                      <i className="fa fa-building-o"></i>&nbsp;Fibo Holiday
                      Hotel
                    </p>
                    <p>
                      <i className="fas fa-map-marked-alt"></i>&nbsp;4th Floor,
                      147 Mai Dịch Street, Cau Giay District, Hanoi
                    </p>
                    <p>
                      <i className="fas fa-phone-volume"></i>&nbsp;(024) 6259
                      8807
                    </p>
                    <p>
                      <i className="fas fa-envelope"></i>&nbsp;info@webhotel.vn
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-5 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Tìm hiểu thêm</h4>
                <ul>
                  <li>
                    <a href="#">Về chúng tôi</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản &amp; Chính sách</a>
                  </li>
                  <li>
                    <a href="#">Tin tức</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    <a href="#">Địa chỉ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-7 col-lg-4">
              <div className="widget widget_tripadvisor">
                <h4 className="widget-title">Phương thức thanh toán</h4>
                <img
                  src={require("../../assets/images/pay.png")}
                  alt="Phương thức thanh toán"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                " Copyright © Hotel Booking - All Rights Reserved. POWERED BY
                NTP "
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
