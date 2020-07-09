import React from "react";

import { Link, Panel } from "@vkontakte/vkui";
import { Navigation } from "../components/index.js";

import { logo, photo, more, share, verify, like } from "../images/src";

const Main = ({ id, go }) => (
  <Panel id={id}>
    <Navigation go={go} activePanel={id} />

    <div className="content">
      <div className="heading">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="steps">
        <span className="steps__item steps__item_active"></span>
        <span className="steps__item"></span>
        <span className="steps__item"></span>
      </div>
      <div className="photos">
        <img src={photo} alt="" />
      </div>
      <div className="person-info">
        <div className="person-info__more">
          <Link href="#">
            <img src={more} alt="" />
          </Link>
        </div>
        <div className="person-info__primary">
          <div className="person-info__name">
            Elina, 23
            <img className="verify" src={verify} alt="" />
            <Link href="#">
              <img src={share} alt="" />
            </Link>
          </div>

          <p className="person-info__job">Diamond Queen at Oriflame</p>
          <p className="person-info__education">Berkeley College ‘18</p>
          <p className="person-info__location">0,5 км от вас</p>
        </div>
        <div className="person-info__status">
          <p>Онлайн</p>
          <span className="gradient"></span>
        </div>
        <Link href="#" className="like-button">
          <img src={like} alt="" />
        </Link>
      </div>
    </div>
  </Panel>
);

export default Main;
