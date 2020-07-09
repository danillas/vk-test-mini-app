import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import { Navigation } from "../components/index.js";

import { union } from "../images/src";

const Messenger = ({ id, go }) => (
  <Panel id={id}>
    <Navigation go={go} activePanel={id} />

    <div className="content">
      <div className="content__no-message">
        <img src={union} alt="" />
        <h1>Скорее знакомиться!</h1>
        <p>
          Тут отобразятся переписки с пользователями с которыми у вас возникла
          взаимная симпатия
        </p>
      </div>
    </div>
  </Panel>
);

export default Messenger;
