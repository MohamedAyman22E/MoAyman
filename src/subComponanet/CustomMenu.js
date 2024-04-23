import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Color from "./Color";
import { FaAngleRight } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
const Menu = styled.div`
  position: absolute;
  width: 300px;
  border-radius: 10px;
  background-color: ${props => props.theme.text};
  box-shadow: 0 0 5px ${props => props.theme.body};
  color: ${props => props.theme.body};
  padding: 15px;
`;
const Chose = styled.div`
  margin: 0px 0;
  padding: 0px 12px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  .Links {
    position: relative;
    display: flex;
  }
  .Setting {
    display: flex;
    align-items: center;
  }
`;
const IconRight = styled.span``;
const Arrow = styled.div`
  display: flex;
  align-items: center;
`;

const Hidden = styled.div`
  position: absolute;
  right: -200px;
  top: 45%;
  transform: translateY(-50%);
  background-color: ${props => props.theme.text};
  box-shadow: 0 0 5px ${props => props.theme.body};
  color: ${props => props.theme.body};
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display: none;
  transition: all.3s;
  padding: 15px;
  overflow: auto;
  /* ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
  } */

  ${Chose}:hover & {
    display: flex;
    flex-direction: column;
  }
`;
const Name = styled.div`
  margin: 15px 0;
  padding: 7px 12px;
  border-radius: 5px;
  cursor: pointer;
`;
const NameTwo = styled(Link)`
  margin: 5px 0;
  padding: 7px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: ${props => props.theme.body};
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 10px 0;
`;
const Icon = styled.span`
  margin-top: 7px;
`;
// const Show = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 7px;
// `;
const CustomMenu = () => {
  const [ShowMenu, SetShowMenu] = useState(false);
  const [colorMenu, SetColorMenu] = useState(false);
  let menu = document.querySelector(".shareMenu");
  let shareMenu = document.querySelectorAll(".hidden");
  const handelContextMenu = e => {
    SetShowMenu(true);
    e.preventDefault();
    let x = e.offsetX,
      y = e.offsetY,
      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      cmWidth = menu.offsetWidth,
      cmHeight = menu.offsetHeight;
    shareMenu.forEach(e => {
      if (x > winWidth - cmWidth - e.offsetWidth) {
        e.style.left = "-200px";
      } else {
        e.style.left = "";
        e.style.right = "-200px";
      }
    });
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    menu.style.visibility = "visible";
  };
  const handelClick = () => {
    SetShowMenu(false);
  };
  useEffect(() => {
    document.addEventListener("click", handelClick);
    document.addEventListener("contextmenu", handelContextMenu);
    return () => {
      document.removeEventListener("click", handelClick);
      document.removeEventListener("contextmenu", handelContextMenu);
    };
  });
  // Full Screen
  const toggleFullScreen = () => {
    const isFullScreen = document.fullscreenElement;
    const element = document.querySelector("body");
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
  };
  return (
    <div>
      <div
        style={{
          display: ShowMenu ? "block" : "none",
          position: "absolute",
          zIndex: 1000000000000000000,
        }}
      >
        <Menu className="shareMenu">
          <Chose onClick={toggleFullScreen}>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>Full Screen</Name>
            </Arrow>
            <IconRight>
              <BsFullscreen />
            </IconRight>
          </Chose>
          <Chose>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>Path</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
            <Hidden className="hidden">
              <NameTwo to="/">Main</NameTwo>
              <NameTwo to="/say">SayHi</NameTwo>
              <NameTwo to="/work">Work</NameTwo>
              <NameTwo to="/blog">Blog</NameTwo>
              <NameTwo to="/about">About</NameTwo>
              <NameTwo to="/skills">MySkill</NameTwo>
            </Hidden>
          </Chose>
          <Chose>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>Languages</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
            <Hidden className="hidden">
              <NameTwo>Ar</NameTwo>
              <NameTwo>En</NameTwo>
              <NameTwo>Fr</NameTwo>
              <NameTwo>Ch</NameTwo>
              <NameTwo>Ru</NameTwo>
            </Hidden>
          </Chose>
          <Chose>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>Contacts</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
            <Hidden className="hidden">
              <NameTwo>Ar</NameTwo>
              <NameTwo>En</NameTwo>
              <NameTwo>Fr</NameTwo>
              <NameTwo>Ch</NameTwo>
              <NameTwo>Ru</NameTwo>
              <NameTwo>Ar</NameTwo>
              <NameTwo>En</NameTwo>
              <NameTwo>Fr</NameTwo>
              <NameTwo>Ch</NameTwo>
              <NameTwo>Ru</NameTwo>
            </Hidden>
          </Chose>
          <Line></Line>
          <Chose className="Setting" onClick={() => SetColorMenu(true)}>
            <Arrow>
              <Icon>
                <FaLink />
              </Icon>
              <Name>Setting</Name>
            </Arrow>
            <IconRight>
              <FaAngleRight />
            </IconRight>
          </Chose>
        </Menu>
      </div>
      {colorMenu ? (
        <Color colorMenu={colorMenu} SetColorMenu={SetColorMenu} />
      ) : null}
    </div>
  );
};
export default CustomMenu;
