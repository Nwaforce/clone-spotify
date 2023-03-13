import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { FaThLarge, FaUsers, FaHeart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BsCalendarRangeFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";import { FaBandcamp } from "react-icons/fa";import Playlists from "./Playlists";
export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <FaHome />
            <span>Home</span>
          </li>
          <li>
            <FaExternalLinkAlt />
            <span>Trends</span>
          </li>
          <li>
            <FaBandcamp />
            <span>Feed</span>
          </li>
        </ul>
        <span>Discover</span>
        <ul>
          <li>
            <FaThLarge />
            <span>New and Notable</span>
          </li>
          <li>
            <FaCalendar />
            <span>Release Calendar</span>
          </li>
          <li>
            <BsCalendarRangeFill />
            <span>Events</span>
          </li>
        </ul>
        <span>Your Collection</span>
        <ul>
          <li>
            <FaHeart />
            <span>Favorite Songs</span>
          </li>
          <li>
            <FaCalendar />
            <span>Artist</span>
          </li>
          <li>
            <FaUsers />
            <span>Albums</span>
          </li>
        </ul>
        <span>Playlists</span>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      background: black;
      margin-top: 0px;
      img {
        max-inline-size: 50%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: green;
        }
      }
    }
  }
`;