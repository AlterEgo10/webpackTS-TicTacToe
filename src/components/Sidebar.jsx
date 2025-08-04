import React from 'react'
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

const Divider = styled.hr`
  color: white;
  width: 100%;
`

export default function Sidebar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)', })
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
        />
        <span className="fs-4">Меню</span>
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
            Главная
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
            Фильмы
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/series"
            //eventKey="/series"
            className={({ isActive }) =>
              'text-light' + (isActive ? 'active' : '')
            }
          >
            <MdOutlineLocalMovies
              size="16"
              className="me-2"
            />
            Сериалы
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
            Оценить
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/auth"
            //  eventKey="/auth"
            className={({ isActive }) =>
              'text-light' + (isActive ? 'active' : '')
            }
          >
            <SiAuthy
              size="16"
              className="me-2"
            />
            Авторизация
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
            <strong>Гость</strong>
          </>
        }
        className="text-light"
        drop="up"
        menuVariant="dark"
        style={{ width: '100%' }}
      >
        <NavDropdown.Item
          as={Link}
          to="/profile"
        >
          Мой профиль
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to="/setting"
        >
          Настройки
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          as={Link}
          to="/auth/logout"
        >
          Выход
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}
