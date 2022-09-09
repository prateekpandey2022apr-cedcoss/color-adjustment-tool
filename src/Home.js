import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "./data";

function Home(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.bgColor ?? "initial",
          filter: `contrast(${props.contrast})`,
        }}
      >
        <div className="accessiblity-tool">
          <a href="#" onClick={() => setIsDrawerOpen(true)}>
            <i className="fa-solid fa-person"></i>
          </a>
        </div>

        <div className="wrapper">
          <div className="row">
            <h1
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              Heading 1
            </h1>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <h2
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              Heading 2
            </h2>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <h2
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              Heading 3
            </h2>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="row">
            <h2
              style={{
                color: props.titleColor ?? "initial",
              }}
            >
              Heading 4
            </h2>
            <p
              style={{
                color: props.textColor ?? "initial",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nisl nec diam convallis pulvinar. Vestibulum iaculis odio
              felis, sit amet congue leo aliquam ac. Nullam dignissim ligula nec
              nunc sollicitudin vestibulum. Proin vestibulum nunc lorem, in
              consectetur leo fringilla non. Nullam sagittis interdum sapien
              vitae molestie. Donec a orci non turpis tincidunt dictum. Etiam id
              quam enim. Proin sit amet fermentum enim.
            </p>
          </div>
        </div>

        <div className="wrapper">
          {/* <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton> */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={2} width="250px" textAlign="center" role="presentation">
              <div className="text-color-select">
                <p>Text Color</p>
                {colors.map((color, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`color ${
                        props.textColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(event) => props.handleTextColor(event, color)}
                    ></span>
                  );
                })}
                {props.textColor.length > 0 && (
                  <>
                    <a
                      href="#/"
                      onClick={(event) => props.handleTextColor(event, "")}
                    >
                      Cancel
                    </a>
                  </>
                )}
              </div>

              <div className="background-color-select">
                <p>Background Color</p>
                {colors.map((color, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`color ${
                        props.bgColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(event) => props.handleBgColor(event, color)}
                    ></span>
                  );
                })}
                {props.bgColor.length > 0 && (
                  <>
                    <a
                      href="#/"
                      onClick={(event) => props.handleBgColor(event, "")}
                    >
                      Cancel
                    </a>
                  </>
                )}
              </div>

              <div className="title-color-select">
                <p>Title Color</p>
                {colors.map((color, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`color ${
                        props.titleColor === color ? "active" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(event) => props.handleTitleColor(event, color)}
                    ></span>
                  );
                })}
                {props.titleColor.length > 0 && (
                  <>
                    <a
                      href="#/"
                      onClick={(event) => props.handleTitleColor(event, "")}
                    >
                      Cancel
                    </a>
                  </>
                )}
              </div>
              <div className="contrast-control">
                <div className="contrast-select">
                  <div
                    onClick={(event) => props.handleContrast(event, "50%")}
                    className={`dark-contrast ${
                      props.contrast === "50%" ? "active" : ""
                    }`}
                  >
                    <div className="contrast-icon">
                      <i class="fa-solid fa-moon"></i>
                    </div>
                    <div>Dark</div>
                  </div>
                  <div
                    onClick={(event) => props.handleContrast(event, "100%")}
                    className={`dark-contrast ${
                      props.contrast === "100%" ? "active" : ""
                    }`}
                  >
                    <div className="contrast-icon">
                      <i class="fa-regular fa-sun"></i>
                    </div>
                    <div>Light</div>
                  </div>
                  <div
                    onClick={(event) => props.handleContrast(event, "200%")}
                    className={`dark-contrast ${
                      props.contrast === "200%" ? "active" : ""
                    }`}
                  >
                    <div className="contrast-icon">
                      <i class="fa-solid fa-circle-half-stroke"></i>
                    </div>
                    <div>High</div>
                  </div>
                </div>
                <div>
                  {props.contrast.length > 0 && (
                    <>
                      <a
                        href="#/"
                        onClick={(event) => props.handleContrast(event, "")}
                      >
                        Cancel
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default Home;
