import "./Hero.scss";
import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <>
        <section className="sec1">
          <div className="container">
            <div className="sec1-all">
              <p className="sec1-p1">LEANGROUP - тубы и этикетки</p>
              <h1 className="sec1-h">Ламинатные тубы</h1>
              <p className="sec1-p2">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="sec1-but">Каталог</button>
              <div className="sec1-img">
                <img src="/images/sec1-sots.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sec2">
          <div className="container">
            <div className="sec2-all">
              <div className="sec2-hh">
                <h1 className="sec2-h1">О компании LEANGROUP</h1>
              </div>
              <div className="sec2-img-flex">
                <img src="/images/sec2-i1.svg" alt="" />
                <p className="sec2-p1">
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб. <br />
                  <br /> Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции. <br />
                  <br /> С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec3">
          <div className="sec3-all">
            <div className="sec3-h">
              <h1>Качество продукции подтверждают сертификаты</h1>
            </div>
            <div className="sec3-img">
              <img src="/images/sec3-strelka.svg" alt="" />
              <img src="/images/sec3-i1.svg" alt="" />
              <img src="/images/sec3-i2.svg" alt="" />
              <img src="/images/sec3-i3.svg" alt="" />
              <img src="/images/sec3-i4.svg" alt="" />
              <img src="/images/sec3-i5.svg" alt="" />
              <img src="/images/sec3-strelka2.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="sec4">
          <div className="container">
            <div className="sec4-all">
              <div className="sec4-h">
                <h1>Наша продукция</h1>
              </div>
              <div className="sec4-buts">
                <button>Ламинатные тубы</button>
                <button>Экструзионные тубы</button>
                <button>Другая упаковка</button>
              </div>
              <div className="sec4-img">
                <img src="/images/sec4-i1.svg" alt="" />
                <img src="/images/sec4-i2.svg" alt="" />
                <img src="/images/sec4-i3.svg" alt="" />
                <img src="/images/sec4-i4.svg" alt="" />
                <img src="/images/sec4-i5.svg" alt="" />
              </div>
              <div className="sec4-but-end">
                <button className="sec4-but">Перейти в каталог</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec5">
          <div className="container">
            <div className="sec5-all">
              <h1 className="sec5-h">Получить подробную информацию</h1>
              <p className="sec5-p">
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>

              <form>
                <div className="sec5-inputs">
                  <input type="Name" placeholder="Ваше имя" />
                  <input type="Number" placeholder="+375 (29) 0000000" />
                </div>
                <div className="sec5-text">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Комментарий"
                  ></textarea>
                </div>
              </form>
              <button className="sec5-but">Получить информацию</button>
            </div>
          </div>
        </section>
        <section className="sec6">
          <div className="container">
            <div className="sec6-all"></div>
          </div>
        </section>
      </>
    );
  }
}
export default Welcome;
