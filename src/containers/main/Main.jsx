// data
import React from "react";
import yearSchedule from "../../assets/images/png/schedule/planned structure.png";
// functions
import { createClass } from "../../utils/data/dataStyling";

// style

// components


import Button from "../../components/ui/buttons/Button";
const button = {
  label: "Donate",
  link: "#Donate",
  target_blank: "",
  id: "button_1",
  ref: "dntns",
  type: "button",
  element: "button",
  class: [
    {
      label: "primary",
      link: "",
      target_blank: "",
      id: "c_3",
      ref: "navLi_1",
      type: "class",
      element: "className",
      icon: "",
      parts: [],
      data: [],
      function: null
    }
  ],
  icon: "",
  parentId: "",
  dataParent: false,
  parts: [],
  data: [],
  function: null
}

export default function Main(props) {
  return (
    < React.Fragment >
      <main id="mhsnn" className="main">
        <section className="slideshow" id="sldshw">
          <header className="hide">
            <h2>
              Slide show
            </h2>
          </header>

          {props.content.parts.map((item, i) => {
            if (item.id === "sldshwL") { return props.createElement(item, i) } else {
              return ''
            };
          })}
        </section>

        <section className="section--main schedule" id="schdl">
          <header className="hide">
            <h2>
              Schedule
            </h2>
          </header>

          <article className="schdl__Art_1" id="schdl__Art_1">
            <header className="schdlHdr_1">
              <h3 className="schdlH3_1">
                Take a look at past and upcoming fun.
              </h3>
            </header>

            <ul className="schdl__list">
              <li className="schdl__listItem schdl__listItem--monthly">
                <article className="schdl__Art_1">
                  <header className="schdlHdr_2">
                    <h4 className="tittle--bigger schdlH4_1">
                      monthly schedule
                    </h4>
                  </header>

                  {props.content.parts.map((item, i) => {
                    if (item.id === "schdlL_1") { return props.createElement(item, i) } else {
                      return ''
                    };
                  })}
                </article>
              </li>

              <li className="schdl__listItem">
                <article className="schdl__Art_2">
                  <header className="schdlHdr_3">
                    <h4 className="tittle--bigger  schdlH4_2">
                      yearly schedule
                    </h4>
                  </header>

                  <img className="schdlImg_2" src={yearSchedule} alt="our yearly schedule" width="500" height="600" />
                </article>
              </li>
            </ul>
          </article>

          <article className="schdl__Art" id="schdl__Art_2">
            <header className="schdlHdr_4">
              <h3 className="schdlH3_2">
                Like what you see? InshAllah. Please join.
              </h3>
            </header>

            <a className="schdl__Art__link schdl__Art__link--button-secundary" href="https://chat.whatsapp.com/LYxNDJnJeNYAmcmG2dNGLP" target="blank">Join Muhsinoon</a>
          </article>


        </section>

        <section className="section--main classes" id="clsss">
          <header className="schdlH3_1">
            <h2 className="hide">
              Events &amp; classes
            </h2>
          </header>

          <article>
            <header>
              <h3 className="tittle--bigger">
                Events &amp; classes
              </h3>
            </header>

            {props.content.parts.map((item, i) => {
              if (item.id === "eventsL") { return props.createElement(item, i) } else {
                return ''
              };
            })}
          </article>
        </section>

        <section className="section--main donations" id="dntns">
          <header className="hide">
            <h2>
              Donations
            </h2>
          </header>

          <article>
            <header>
              <h3 className="tittle--bigger">
                Supporting Muhsinoon
              </h3>
            </header>

            <p className="text">
              We are in the process of coordinating multiple events and classes, each necessitating: the purchase or availability of supplies, rental of spaces, payment of fees, and related expenses. To streamline our operations and ensure efficient organization, we aim to establish a dedicated group fund, along with a comprehensive material database. This fund and materials will empower us to efficiently cover the essential expenditures associated with our initiatives. Your generous support in this endeavor would be greatly valued.</p>

            <p className="text">Jazakh Allah khairn</p>
          </article>

          <Button
            key={2}
            class={createClass(button)}
            item={button}
            label={button.label}
            onClick={button.function}
          />
        </section>

        <section className="section--main about" id="abt">
          <header className="hide">
            <h2>
              About
            </h2>
          </header>

          <article id="mssn">
            <header>
              <h3 className="tittle--bigger">
                Mission
              </h3>
            </header>

            <p className="text">
              Our mission at Muhsinoon Homeschool group is to provide a nurturing educational environment rooted in Islamic teachings, where every aspect of learning is infused with the principles of Islam. We strive to empower families in fostering a deep connection with their faith and the world around them, guiding our students ( Children) to understand and appreciate the interconnectedness of all creation through the lens of Islamic beliefs and nature. Through this holistic approach, we aim to cultivate individuals who are not only knowledgeable in academic subjects but also spiritually grounded , confident, intellectually curious and socially conscious, equipped to make positive contributions to their communities and the world at large.
            </p>
          </article>

          <article id="vsn">
            <header>
              <h3 className="tittle--bigger">
                Vision
              </h3>
            </header>

            <p className="text">
              Our vision is to cultivate an Islamic homeschool community where the beauty of Islam illuminates every learning experience, fostering a profound connection between knowledge and faith. We aspire to empower families to become pillars of Islamic values, instilling in each member a deep appreciation for the interconnectedness of all creation with the teachings of Islam and the wonders of nature. Through this harmonious integration, we envision nurturing individuals who are spiritually enlightened, intellectually enriched, and socially engaged, embodying the essence of Islamic principles in every aspect of their lives.
            </p>
          </article>

          <article id="bio">
            <header>
              <h3 className="tittle--bigger">
                Who is "Muhsinoon"?
              </h3>
            </header>

            <p className="text">
              All in the light of Allah. We are the 'Home of the Little Muslim Seekers,' eager to wander, explore, &amp; discover. It's in our name &amp; heart to provide a safe place for the next generation of world changers to ask, learn, question, &amp; discover. Let's not forget about the mothers(&amp; fathers, family, &amp; friends at certain times), a place for reflection &amp; self - growth, as "we", the ones who walk alongside the children through their adventures of life, are important as well.
            </p>

            <p className="text">
              MashAllah, what was initially a gathering of mothers convening for leisurely strolls and playdates has evolved into a community of akin homeschooling families, spanning from infancy to elementary levels, with evident prospects for continued expansion. This growth is underpinned by the steadfast dedication of five visionary mothers, each contributing unique strengths to the collective aspiration for educational excellence.
            </p>

            <p className="text">
              Our homeschool families work cooperatively with a flexible yet organized structure, in an atmosphere of mutual respect and interest-driven exploration. What makes this group so enriched is having the advisement and assistance of all the parents. We aim for Mothers to participate by volunteering in various roles throughout the day.
            </p>
          </article>

          <article className="abt__Art" id="abt__Art_2">
            <header className="abtHdr_4">
              <h3 className="abtH3_2">
                Like what you read? InshAllah. Please join.
              </h3>
            </header>

            <a className="abt__Art__link abt__Art__link--button-secundary" href="https://chat.whatsapp.com/LYxNDJnJeNYAmcmG2dNGLP" target="blank">Join Muhsinoon</a>
          </article>
        </section>
      </main>
    </React.Fragment >
  );
}