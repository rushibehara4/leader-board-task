import React from "react";
import { FaTrophy } from "react-icons/fa";
import { BiSolidTimer } from "react-icons/bi";
import AddPlayerModal from "./playermodal";
import "../App.css";

const timeToMilliseconds = (time) => {
  const [minutes, seconds, milliseconds] = time.split(":").map(Number);
  return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
};

const assignPrize = (rank) => {
  switch (rank) {
    case 1:
      return 50000;
    case 2:
      return 5000;
    case 3:
      return 500;
    default:
      return 0;
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastAddedRank: null,
      animationClass: "",
    };
  }

  handleAddPlayer = (newPlayer) => {
    this.props.addPlayer(newPlayer);
    const lastRank = this.props.data.length + 1;
    this.setState({ 
      lastAddedRank: lastRank,
      animationClass: `slide-in rank-${lastRank}` // Set animation class
    }, () => {
      // Clear animation class after animation completes
      setTimeout(() => {
        this.setState({ animationClass: "" });
      }, 500); // match the animation duration
    });
  };

  render() {
    const { data, lastEntry } = this.props;
    const { lastAddedRank, animationClass } = this.state;

    // Check if data is being received correctly
    console.log("Data received in Home component:", data);

    const sortedData = [...data].sort(
      (a, b) => timeToMilliseconds(a.time) - timeToMilliseconds(b.time)
    );

    const rankedData = sortedData.map((item, index) => ({
      ...item,
      prize: assignPrize(index + 1),
      rank: index + 1,
    }));

    // Top 10 data
    const top10Data = rankedData.slice(0, 10);

    // Last entry data
    const displayEntry =
      lastEntry || (data.length > 0 ? data[data.length - 1] : null);

    return (
      <>
        <div className="background-container">
          <div className="home-container">
            <div className="home-title-container">
              <div className="lines-container">
                <div className="head-line orange-line"></div>
                <div className="head-line orange-line line-2"></div>
                <div className="head-line orange-line line-3"></div>
              </div>
              <button className="head-button" id="headButton">
                <h1 className="home-title">FASTEST OF TODAY</h1>
              </button>
              <div className="lines-container blue-con">
                <div className="head-line blue-line line-1"></div>
                <div className="head-line blue-line line-2"></div>
                <div className="head-line blue-line"></div>
              </div>
            </div>
            <div className="home-head-con">
              <div className="score-card-container">
                <FaTrophy className="score-card-head-icons trophy head-val ms-2" />
                <h5 className="table-head-content head-val">NAME</h5>
                <h5 className="table-head-content head-val">PRIZE(&#8377;)</h5>
                <div className="d-flex flex-row justify-content-center timer-con head-val">
                  <BiSolidTimer className="score-card-head-icons me-2 timer-icon" />
                  <h5 className="table-head-content">TIME</h5>
                </div>
              </div>
              {top10Data.map((item) => (
                <div
                  key={item.rank}
                  className={`score-card-details-container rank-${item.rank} ${lastAddedRank === item.rank ? animationClass : ""}`}
                >
                  <div className="player-value">
                    <p
                      className={`rank ${
                        item.rank === 1
                          ? "first-prize"
                          : item.rank === 2
                          ? "second-prize"
                          : item.rank === 3
                          ? "third-prize"
                          : ""
                      }`}
                    >
                      {item.rank}
                    </p>
                  </div>
                  <div className="player-value player-name">{item.name}</div>
                  <div className="player-value price-money">{item.prize}</div>
                  <div className="player-value player-time">{item.time}</div>
                </div>
              ))}
              <div className="add-player-con mt-4 d-flex flex-row justify-content-end">
                <AddPlayerModal onAddPlayer={this.handleAddPlayer} />
              </div>
              <div className="recent-entry-con">
                <div className="recent-con-heading-element last-details-heading">
                  <h4 className="home-title recent-tile">LAST ENTRY DETAILS</h4>
                </div>
                {displayEntry && (
                  <div className="score-card-details-container-recent-entry slide-to-center">
                    <div className="player-value">
                      <p className="rank">
                        {displayEntry.rank || data.length + 1}
                      </p>
                    </div>
                    <div className="player-value player-name">
                      {displayEntry.name}
                    </div>
                    <div className="player-value price-money">
                      {displayEntry.prize || 0}
                    </div>
                    <div className="player-value player-time">
                      {displayEntry.time}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="banner-image">
            <img
              src="https://raw.githubusercontent.com/LazyIdli-SoftwareTeam/internshal_project_software/master/assets/BANER-SHANNH%201.png"
              alt="banner-image"
              className="banner-image"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
