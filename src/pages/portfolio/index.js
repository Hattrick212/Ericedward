import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import home from "../../assets/images/EVA/home.jpeg";
import postjob_mobile from "../../assets/images/EVA/postjob_mobile.jpeg";
import howitworks from "../../assets/images/EVA/howitworks.jpeg";
import securitycheck from "../../assets/images/EVA/securitycheck.jpeg";
import l_home from "../../assets/images/LetsUseData/home.png";
import status from "../../assets/images/LetsUseData/My status.png";
import modu from "../../assets/images/LetsUseData/module.png";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          <div key={1} className="po_item">
            <img src={home} alt="" />
            <div className="content">
              <p>EVirtualAssistant</p>
              <a href={"https://dev.evirtualassistants.com"}>view project</a>
            </div>
          </div>
          <div key={2} className="po_item">
            <img src={postjob_mobile} alt="" />
            <div className="content">
              <p>EVirtualAssistant</p>
              <a href={"https://dev.evirtualassistants.com"}>view project</a>
            </div>
          </div>
          <div key={3} className="po_item" style={{marginBottom: "3rem", marginTop: "2rem"}}>
            <img src={modu} alt="" />
            <div className="content">
              <p>LetsUseData</p>
              <a href={"https://letsusedata.com"}>view project</a>
            </div>
          </div>
          <div key={4} className="po_item" style={{marginBottom: "3rem"}}>
            <img src={l_home} alt="" />
            <div className="content">
              <p>LetsUseData</p>
              <a href={"https://letsusedata.com"}>view project</a>
            </div>
          </div>
          <div key={5} className="po_item">
            <img src={status} alt="" />
            <div className="content">
              <p>LetsUseData</p>
              <a href={"https://letsusedata.com"}>view project</a>
            </div>
          </div>
          <div key={7} className="po_item">
            <img src={howitworks} alt="" />
            <div className="content">
              <p>EVirtualAssistant</p>
              <a href={"https://dev.evirtualassistants.com"}>view project</a>
            </div>
          </div>
          <div key={6} className="po_item">
            <img src={securitycheck} alt="" />
            <div className="content">
              <p>EVirtualAssistant</p>
              <a href={"https://dev.evirtualassistants.com"}>view project</a>
            </div>
          </div>
          {/* {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={home} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            ); */}
          {/* })} */}
        </div>
      </Container>
    </HelmetProvider>
  );
};
