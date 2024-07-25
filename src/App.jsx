import React, { Component } from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const initialData = [
  { rank: 1, name: "Alice", time: "01:12:345" },
  { rank: 2, name: "Bob", time: "01:15:567" },
  { rank: 3, name: "Charlie", time: "01:18:789" },
  { rank: 4, name: "David", time: "01:22:890" },
  { rank: 5, name: "Eve", time: "01:25:123" },
  { rank: 6, name: "Frank", time: "01:28:456" },
  { rank: 7, name: "Grace", time: "01:30:678" },
  { rank: 8, name: "Hank", time: "01:32:890" },
  { rank: 9, name: "Ivy", time: "01:35:012" },
  { rank: 10, name: "Jack", time: "01:37:234" },
  { rank: 11, name: "Karen", time: "01:39:456" },
  { rank: 12, name: "Leo", time: "01:41:678" },
  { rank: 13, name: "Mia", time: "01:43:890" },
  { rank: 14, name: "Nina", time: "01:45:123" },
  { rank: 15, name: "Owen", time: "01:47:345" },
  { rank: 16, name: "Paul", time: "01:49:567" },
  { rank: 17, name: "Quinn", time: "01:51:789" },
  { rank: 18, name: "Rita", time: "01:53:890" },
  { rank: 19, name: "Steve", time: "01:55:123" },
  { rank: 20, name: "Tina", time: "01:57:345" },
  { rank: 21, name: "Uma", time: "01:59:567" },
  { rank: 22, name: "Vera", time: "02:01:678" },
  { rank: 23, name: "Will", time: "02:03:890" },
  { rank: 24, name: "Xena", time: "02:05:123" },
  { rank: 25, name: "Yara", time: "01:11:345" },
  { rank: 26, name: "Ravan", time: "03:11:345" },
];

class App extends Component {
  state = {
    data: initialData,
    lastEntry: null,
  };

  addPlayer = (player) => {
    // Add the new player to the data
    this.setState((prevState) => ({
      data: [...prevState.data, player],
      lastEntry: player,
    }));
  };

  render() {
    const { data, lastEntry } = this.state;

    return (
      <>
        <Navbar />
        <Home data={data} addPlayer={this.addPlayer} lastEntry={lastEntry} />
        <Footer />
      </>
    );
  }
}

export default App;
