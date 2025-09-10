//import React from 'react'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components'
import record from '../img/record.svg'
import { MdOutlineLocalMovies } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { FcRating } from 'react-icons/fc';
import { SiAuthy } from 'react-icons/si';
import {NavLink, Link} from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; 
import Settings from './Settings';

 const API_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

  // const API_BASE_URL =
  //   process.env.REACT_APP_BASE_URL || 'http://localhost:3001';



const Divider = styled.hr`
  color: white;
  width: 100%;
`
// const Settings = styled.Settings`
//   margin-top: 50px;
// `

export default function Sidebar() {
const { t } = useTranslation();

  const [login, setLogin] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const nameReq = async () => {
      try {
        const result = await axios.get(`${API_BASE_URL}/users`);
        const users = result.data;
        if (users.length > 0) {
          const num = users.length - 1;
          setLogin(users[num].name);
        } else {
          console.log('No users found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    nameReq();
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ width: '100%', height: isMobile ? 'auto' : '100vh' }}
      className="flex-column flex-shrink-0 p-3"
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="me-auto"
      >
        <img
          src={record}
          width="40px"
          className="me-2"
          alt={t('app.logo') || ''}
        />
        <span className="fs-4">{t('app.title')}</span>
      </Navbar.Brand>
      <Divider />
      <Nav
        className="flex-column mb-auto"
        defaultActiveKey="/"
        variant="pills"
        style={{ width: '100%' }}
      >
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/"
            end
            //  eventKey="/"
            className={({ isActive }) =>
              'text-light' + (isActive ? 'active' : '')
            }
          >
            <IoHomeOutline
              size="16"
              className="me-2"
            />
            {t('app.menu.main')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/films"
            // eventKey="/films"
            className={({ isActive }) =>
              'text-light' + (isActive ? 'active' : '')
            }
          >
            <MdOutlineLocalMovies
              size="16"
              className="me-2"
            />
            {t('app.menu.movies')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/series"
            className={({ isActive }) =>
              'text-light' + (isActive ? 'active' : '')
            }
          >
            <MdOutlineLocalMovies
              size="16"
              className="me-2"
            />
            {t('app.menu.series')}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/form"
            //eventKey="/form"
            className={({ isActive }) =>
              'text-light' + (isActive ? 'active' : '')
            }
          >
            <FcRating
              size="16"
              className="me-2"
            />
            {t('app.menu.rate')}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Divider />
      <NavDropdown
        title={
          <>
            <CgProfile
              size="32"
              className="me-2"
            />
            {/* <strong>Гость</strong> */}
            <strong>{login}</strong>
          </>
        }
        className="text-light"
        drop="up"
        menuVariant="dark"
        style={{ width: '100%' }}
      >
        {/* <NavDropdown.Item
          as={Link}
          to="/profile"
        >
          {t('app.menu.profile')}
        </NavDropdown.Item>*/}
        <NavDropdown.Item
          as={Link}
          to="/setting"
        >
          {t('app.menu.settings')}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          as={Link}
          to="/auth/logout"
        >
          {t('app.menu.logout')}
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}
