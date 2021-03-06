import React from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
  position: absolute;
  width: ${props => props.width && `${props.width}px`};
  height: ${props => props.width && `${props.width}px`};
  left: ${props => props.left && `${props.left}px`};
  top: ${props => props.top && `${props.top}px`};
  border-radius: 50%;
  background: ${props => props.background && `${props.background}`};
  display: inline-block;
  z-index: 999;
  transition: top 0.5s, left 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`

const Player = ({ user, dimension, playerRoom, hideName, playerColor }) => {
  const playerWidth = dimension / 4
  const left = playerRoom.x + dimension / 2 - playerWidth / 2
  const top = playerRoom.y + dimension / 2 - playerWidth / 2
  return (
    <StyledPlayer
      background={playerColor}
      width={playerWidth}
      left={left}
      top={top}
    >
      {!hideName && user[0].toUpperCase()}
    </StyledPlayer>
  )
}

export default Player
