import React from "react";
import styled from "styled-components";
// us// import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
export default function Navbar({ navBackground }) {
  // const [{ userInfo }] = useStateProvider();
  return (
    <Container navBackground={navBackground}>
      <h1>Shortcut</h1>
    
      <div className="but">
      <button className="button"> Hits</button>
      <button className="button">Hop</button>
      {/* <button className="button">Accoustic</button>
      <button className="button">Indie Pop</button> */}
      <button className="button">Piano Blues</button>
      <button className="button">Jazz</button>
      </div>
     

      <h1>  Fav Artist</h1>
      <spann className="span" >
        <div >
          
          <h3>Taylor Swift </h3>
          <p>196 songs in Library</p>
        
         
          <h3>Kanye West </h3>
          <p>124 songs in Library</p>
        
          <h3>Drake </h3>
          <p>50 songs in Library</p>

          <h3>Billie Eilish</h3>
          <p>15 songs in Library</p>
        </div>
      </spann> 

        {/* <span className="search__bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </span> 
      <span className="avatar">
        <a href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </span>   */}
    </Container>
  );
}

const Container = styled.span`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
   align-items: center;
   padding: 2rem;
  height: 90vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "" : "none"};
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
  .but{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    width: 146px;
    justify-content: space-around;
  }
  .button{
    border-radius: 100px;
    padding: 10px;
  }
  .span{
    margin-bottom: 90px;
  }
`;