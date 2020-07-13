import React from "react";

import { Link, Panel } from "@vkontakte/vkui";

import { Navigation } from "../components/index.js";

import { logo, photo, more, share, verify, like } from "../images/src";

let heightStored = 600;
let topPaddingStored = 0;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: heightStored,
      topPadding: topPaddingStored,
      bottomPadding: 48,
    };
  }

  calcPaddings = () => {
    let els = document.getElementsByClassName("tab-bar");
    let sat = getComputedStyle(document.documentElement).getPropertyValue(
      "--safe-area-inset-top"
    );
    topPaddingStored = parseInt(sat);
    //console.log("els", els);
    //console.log("topPaddingStored:", topPaddingStored);

    if (els.length > 0) {
      heightStored = window.innerHeight;
      console.log("heightStored", heightStored);
      console.log("els[0].offsetTop", els[0].offsetTop);
      this.setState({
        height: heightStored,
        topPadding: topPaddingStored,
        bottomPadding: window.innerHeight - els[0].offsetTop,
      });
    } else {
      heightStored = window.innerHeight;
      this.setState({
        height: heightStored,
        topPadding: topPaddingStored,
      });
    }
  };

  componentDidMount() {
    this.calcPaddings();
    console.log("bottomPadding", this.state.bottomPadding);
  }

  render() {
    return (
      <Panel id={this.props.id}>
        <Navigation go={this.props.go} activePanel={this.props.id} />

        <div className="content">
          <div
            className="logo"
            style={{
              top: this.state.topPadding + 12 + "px",
            }}
          >
            <img src={logo} alt="" />
          </div>

          <div
            className="steps"
            style={{
              top: this.state.topPadding + "px",
            }}
          >
            <span className="steps__item steps__item_active"></span>
            <span className="steps__item"></span>
            <span className="steps__item"></span>
          </div>

          <div className="photos">
            <div
              className="photos__item"
              style={{ backgroundImage: "url(" + photo + ")", height: "100%" }}
            ></div>
          </div>
          <div
            className="person-info"
            style={{ bottom: this.state.bottomPadding + "px" }}
          >
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
  }
}

export default Main;
