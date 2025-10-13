//import React from 'react'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar';
 import Tabs from '../Tabs/Tabs'
import ThemeLanguageSwitcher from 'Components/button/ThemeLanguageSwitcher';
// import Menu from '../Menu';
// import OneBestMovie from '../OneBestMovie';

export default function MainLayout() {
const { t } = useTranslation();
  return (
    <div>
      <main>
        <Container
          fluid
          style={{ paddingLeft: 0 }}
        >
          <Row>
            <Col
              sm="12"
              md="4"
              lg="3"
              xl="2"
              style={{ padding: 0 }}
            >
              <Sidebar isActive={false} />
            </Col>
            <Col
              sm="12"
              md="8"
              lg="9"
              xl="10"
              style={{ padding: 0 }}
            >
              <Tabs />
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>

      <footer
        style={{ backgroundColor: 'grey' }}
        className="pt-3"
      >
        <Container fluid>
          <Row>
            <Col>
              <p className="text-center">&copy2025;{t('app.footer')}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
