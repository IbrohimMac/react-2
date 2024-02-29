import "./Header.scss";
import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="head-all">
              <img src="/images/header-logo.svg" alt="" />
              <div className="head-ahrefs">
                <a className="head-a1" href="">
                  Продукция
                </a>
                <a className="head-a2" href="">
                  Сертификаты
                </a>
                <a className="head-a3" href="">
                  Наша команда
                </a>
                <a className="head-a4" href="">
                  О нас
                </a>
                <a className="head-a5" href="">
                  Новости
                </a>
                <a className="head-a6" href="">
                  Вакансии
                </a>
                <a className="head-a7" href="">
                  Контакты
                </a>
              </div>
              <div className="head-end">
                <p className="head-p">RU</p>
                <p>|</p>
                <p className="head-p">EN</p>
              </div>

              {/* <button onClick={this.handleMode}>Dark mode</button> */}
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Welcome;
