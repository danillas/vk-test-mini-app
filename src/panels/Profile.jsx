import React from "react";
import PropTypes from "prop-types";

import { Link, Panel } from "@vkontakte/vkui";
import { Navigation } from "../components/index.js";

import avatar from "../images/src/Avatar.jpg";
import { coins, substract, bars } from "../images/src";

const Profile = ({ id, go }) => {
  return (
    <Panel id="profile">
      <Navigation go={go} activePanel={id} />

      <div className="content">
        <div className="content__top">
          <div className="avatar">
            <div className="avatar__image">
              <img src={avatar} alt="" />
            </div>
            <div className="avatar__name">Calvin, 23</div>
          </div>
          <div className="rating">
            <progress id="rating" value="25" max="100"></progress>
            <p className="rating__title">20% Низкий рейтинг</p>
          </div>
        </div>
        <div className="content__bottom">
          <div className="row">
            <div className="coins">
              <img src={coins} alt="" />
              <p className="coins__title">Coins</p>
              <p className="coins__subtitle">25 coins</p>
            </div>
            <div className="potion">
              <img src={substract} alt="" />
              <p className="potion__title">Love Potion</p>
              <p className="potion__subtitle">Active</p>
            </div>
          </div>
          <div className="row">
            <div className="edit-profile">
              <Link href="#" className="button_stroke">
                Ред. профиль
              </Link>
            </div>
            <div className="stats">
              <Link href="#">
                <img src={bars} alt="" />
              </Link>
            </div>
          </div>
          <div className="settings">
            <Link href="#" className="button_stroke">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </Panel>
  );
};
Profile.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Profile;
