import React, { useState, useEffect } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

import "./BasicTabs.scss";

export default function BasicTabs() {
  const [key, setKey] = useState("home");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const tabletBreakpoint = 768;

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p>
                  In nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing
                  commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus
                  iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor
                  dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus
                  integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit
                  amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam
                  vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum
                  posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique
                  sollicitudin nibh sit amet commodo
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>
                  Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus
                  quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus
                  suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi
                  nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis
                  posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis
                  commodo odio aenean sed adipiscing diam
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 basic-tabs"
      >
        <Tab
          eventKey="home"
          title={
            viewportWidth < tabletBreakpoint ? (
              key === "home" ? (
                "Home"
              ) : (
                <span>
                  <i class="fa-solid fa-house"></i>
                </span>
              )
            ) : (
              "Home"
            )
          }
        >
          <p>Contenido HOME</p>
        </Tab>
        <Tab
          eventKey="profile"
          title={
            viewportWidth < tabletBreakpoint ? (
              key === "profile" ? (
                "Profile"
              ) : (
                <span>
                  <i class="fa-solid fa-user"></i>
                </span>
              )
            ) : (
              "Profile"
            )
          }
        >
          <p>Contenido PROFILE</p>
        </Tab>
      </Tabs>
    </>
  );
}
