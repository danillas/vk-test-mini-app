import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import bridge from "@vkontakte/vk-bridge";
import { View } from "@vkontakte/vkui";
import { usePlatform } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./scss/app.scss";

import Main from "./panels/Main";
import Profile from "./panels/Profile";
import Messenger from "./panels/Messenger";

const App = () => {
  const [activePanel, setActivePanel] = useState("profile");
  const [fetchedUser, setUser] = useState(null);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  const platform = usePlatform();

  return (
    <View activePanel={activePanel}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Helmet>

      <Profile id="profile" go={go} />
      <Main id="main" go={go} platform={platform} />
      <Messenger id="messenger" go={go} />
    </View>
  );
};

export default App;
