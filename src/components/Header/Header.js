import React, { useState, useContext } from "react";

// Stylesheets
import "./Header.css";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronRight,
  faPlay,
  faTachometerAlt,
  faCode,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// Context
import { Context } from "../../context/Context";

const Header = () => {
  const { setSelectedComponent } = useContext(Context);

  const [menu, setMenu] = useState([
    {
      name: "Backtracking",
      subCategories: [
        {
          name: "N Queens Placement",
          value: "NQueensPlacement",
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
      ],
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const toggle = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <div className="header">
        <div className="title">Algorithm Visualizer</div>
      </div>
      <div className="settings">
        <div className="content">
          <div className="left-content">
            <span className="font-weight-bold cursor-pointer menu-item">
              <FontAwesomeIcon icon={faCode} /> Github
            </span>
            <span className="font-weight-bold cursor-pointer menu-item">
              <FontAwesomeIcon icon={faStar} /> Star
            </span>
            <span className="font-weight-bold cursor-pointer menu-item">
              <FontAwesomeIcon icon={faTachometerAlt} /> Speed
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
