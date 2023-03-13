import React from 'react';
import styled from 'styled-components'; 

export default function Login() {
  const handleClick = () => {
    const client_Id = "ae655c60b00c4aa0a176d3ac1a3b7757";
    const redirectUrl = "https://capable-tapioca-bf4801.netlify.app/";
    const api_Url = "http://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email", 
      'user-read-private',
      "user-read-playback-state",
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played', 
    ];
    window.location.href = `${api_Url}?client_id=${client_Id}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    
    console.log({scope})
    
  }; 


  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt='spotify' />
      <button onClick={handleClick}>Log In</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
