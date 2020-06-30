import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "common/src/reusecore/Layout";
import SectionTitle from "common/src/reusecore/SectionTitle";
import VintageBox from "common/src/reusecore/VintageBox";
import Button from "common/src/reusecore/Button";

import integrationImage1 from "common/src/assets/images/app/integrations/integration-1.png";
import integrationImage2 from "common/src/assets/images/app/integrations/integration-2.png";
import integrationImage3 from "common/src/assets/images/app/integrations/integration-3.png";
import integrationImage4 from "common/src/assets/images/app/integrations/integration-4.png";
import Icon from "common/src/assets/images/app/integrations/arrow.png";

import IntegrationItemWrapper from "./integrationSection.style";

const Integrations = () => {
  return (
    <IntegrationItemWrapper>
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="integration__block__wrap">
              <div className="integration__block">
                <div className="integration__block__inner">
                  <img src={integrationImage1} alt="appion integration" />
                  <h3>Mail Chimp</h3>
                  <p>Send Emails</p>
                  <Link href="#">
                    <a>
                      <img src={Icon} alt="appion app" />
                    </a>
                  </Link>
                </div>
                <div className="integration__block__inner">
                  <img src={integrationImage2} alt="appion integration" />
                  <h3>Instagram</h3>
                  <p>News Feed</p>
                  <Link href="#">
                    <a>
                      <img src={Icon} alt="appion app" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="integration__block right">
                <div className="integration__block__inner">
                  <img src={integrationImage3} alt="appion integration" />
                  <h3>Slack</h3>
                  <p>Messaging</p>
                  <Link href="#">
                    <a>
                      <img src={Icon} alt="appion app" />
                    </a>
                  </Link>
                </div>
                <div className="integration__block__inner">
                  <img src={integrationImage4} alt="appion integration" />
                  <h3>twitter</h3>
                  <p>News Feed</p>
                  <Link href="#">
                    <a>
                      <img src={Icon} alt="appion app" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} className="integration-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Integration</h4>
              <h2>
                <span>Uses for this app </span> In the perfect integration.
              </h2>
            </SectionTitle>
            <p className="integration-text">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="integration-btn">Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </IntegrationItemWrapper>
  );
};

export default Integrations;