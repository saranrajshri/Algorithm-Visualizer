import React, { useState, useContext } from "react";

// Stylesheets
import "./Header.css";

// React helmet
import { Helmet } from "react-helmet";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronRight,
  faTachometerAlt,
  faCode,
  faChevronDown,
  faHeart,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../context/Context";

const Header = () => {
  const { speed, setSpeed } = useContext(Context);
  const { selectedComponent, setSelectedComponent } = useContext(Context);
  const [menu] = useState([
    {
      name: "Backtracking",
      subCategories: [
        {
          name: "N Queens Placement",
          value: "NQueens",
        },
        {
          name: "Sum Of Subsets",
          value: "SumOfSubsets",
        },
      ],
    },
    {
      name: "Simple Recursion",
      subCategories: [
        {
          name: "N Factorial",
          value: "NFactorial",
        },
      ],
    },
    {
      name: "Branch and Bound",
      subCategories: [
        {
          name: "Binary Search",
          value: "BinarySearch",
        },
      ],
    },
    {
      name: "Dynamic Programming",
      subCategories: [
        {
          name: "Fibonacci",
          value: "Fibonacci",
        },
      ],
    },
    {
      name: "Searching",
      subCategories: [
        {
          name: "Linear Search",
          value: "LinearSearch",
        },
        {
          name: "Jump Search",
          value: "JumpSearch",
        },
      ],
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleChange = (e) => {
    setSpeed(e.target.value);
  };

  const toggle = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <Helmet>
        <title>{selectedComponent + "- Algorithm Visualizer"}</title>
      </Helmet>
      <div className="header">
        <div className="title">
          Algorithm Visualizer
          {selectedComponent !== "" && selectedComponent !== undefined ? (
            <span>
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              {selectedComponent}
            </span>
          ) : null}
        </div>
        <div className="trademark">
          Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
          <a
            href="https://linkedin.com/in/saranrajshri"
            target="_blank"
            className="profile-link"
          >
            Shri Saran Raj
          </a>
        </div>
      </div>
      <div className="settings" style={{ paddingTop: 3 }}>
        <div className="content">
          <div className="left-content">
            <span className="font-weight-bold cursor-pointer menu-item">
              <FontAwesomeIcon icon={faCode} /> Github
            </span>
            <span className="font-weight-bold cursor-pointer menu-item">
              <FontAwesomeIcon icon={faStar} /> Star
            </span>
            <span
              className="font-weight-bold cursor-pointer menu-item"
              onClick={() => document.body.requestFullscreen()}
            >
              <FontAwesomeIcon icon={faExpand} /> Full Screen
            </span>
            <span className="font-weight-bold cursor-pointer menu-item">
              <FontAwesomeIcon icon={faTachometerAlt} /> Speed
            </span>
            <span>
              <input
                id="range"
                type="range"
                value={speed}
                min="1"
                max="5"
                step="1"
                onChange={handleChange}
                className="slider"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Side Nav */}
      <div className="sidenav">
        <div className="menu">
          {menu.map((menuItem, index) => {
            return (
              <div
                className="menu-title"
                key={index}
                onClick={() => toggle(index)}
              >
                <span>{menuItem.name} </span>

                {index === selectedIndex ? (
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} className="chevron" />
                )}

                <div className="options">
                  {index === selectedIndex
                    ? menuItem.subCategories.map((subCategory, index) => {
                        return (
                          <div
                            className="sub-menu-title"
                            onClick={() =>
                              setSelectedComponent(subCategory.value)
                            }
                            key={index}
                          >
                            {subCategory.name}
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
