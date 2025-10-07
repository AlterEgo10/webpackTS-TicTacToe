
import { useTranslation } from 'react-i18next'; 
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ThemeLanguageSwitcher from './button/ThemeLanguageSwitcher';

enum Language {
  English = 'en',
  Russian = 'ru'
}

export default function Settings() {
const { t, i18n} = useTranslation();
  const handleClick = (lang: Language) => {
    i18n.changeLanguage(lang)
   }
  return (
    <div>
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
            <div>
              <h1 className="mb-5">{t('settings.title')}</h1>
              <Button
                onClick={() => handleClick(Language.English)}
                variant="outline-primary"
              >
                English
              </Button>{' '}
              <Button
                onClick={() => handleClick(Language.Russian)}
                variant="outline-primary"
              >
                Русский
              </Button>
                 <ThemeLanguageSwitcher title={"dark"}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
