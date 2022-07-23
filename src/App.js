import React, { useState } from "react";
import Logo from "./Logo.png";
import styled from "styled-components";
import "./App.css";

const episodeArr = [
  {
    name: "Episode 1 - Who am I?",
    file: require("./Podcasts/Episode 1 - Who am I.mp3"),
    episode: 1,
  },
  {
    name: "Episode 2 - Technology, Uni Life and Saving the Planet",
    file: require("./Podcasts/Episode 2 - Friends and Co.mp3"),
    episode: 2,
  },
  {
    name: "Episode 3 - Education, Purpose and Success",
    file: require("./Podcasts/Episode 3 - Education, Purpose and Success.mp3"),
    episode: 3,
  },
  {
    name: "Episode 4 - Education, Society and Objectivity",
    file: require("./Podcasts/Episode 4 - Education, Society and Objectivity.mp3"),
    episode: 4,
  },
];

export default function App() {
  return (
    <Everything>
      <MainBodyWrapper>
        <TitleHeader>{"<Yeetcode/>"}</TitleHeader>
        <SubHeader>All episodes</SubHeader>
        <EpisodeContainer>
          {episodeArr.map((episode) => {
            return (
              <Episode>
                <p>{episode.name}</p>
                <audio src={episode.file} controls={true} />
              </Episode>
            );
          })}
        </EpisodeContainer>
      </MainBodyWrapper>
    </Everything>
  );
}

const Everything = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`
const MainBodyWrapper = styled.div`
  background-color: whitesmoke;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  width: 450px;
  box-shadow: 5px 10px 18px #888888;
`;

const TitleHeader = styled.div`
  padding: 20px;
  width: 100%;
  font-size: xx-large;
`;
const SubHeader = styled.div`
  padding: 20px;
  width: 100%;
  font-size: x-large;
`;

const EpisodeContainer = styled.div``;

const Episode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
  width: 375px;
  border-radius: 10px;
  box-shadow: 2px 10px 18px #888888;
  padding: 2vh 2vw;

  p {
    display: block;
    width: 100%;
  }

  audio {
    width: 100%;
  }
`;
