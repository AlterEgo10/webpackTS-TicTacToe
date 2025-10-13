
import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Button,
  Card,
  Spinner,
} from 'react-bootstrap';
import record from '../../img/record.svg';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

   const API_BASE_URL =
     process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await axios.get(`${API_BASE_URL}/users?email=${email}`);
      const users = result.data;
     //console.log(users[0].name);
      if (users.length === 0) {
        setError('Неверный e-mail и/или пароль');
        setPassword('');
        setLoading(false);
        return;
      }

      if (users.length > 0 && bcrypt.compareSync(password, users[0].password)) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', users[0].token);
        navigate('/');
      } else {
        setError('Неверный e-mail или пароль');
        setPassword('');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Ошибка подключения к серверу');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ maxWidth: '330px' }}
    >
      <div className="text-center">
        <img
          src={record}
          alt="Логотип"
          width="64"
          height="64"
          className="mb-4"
        />
        <h1 className="h3 mb-4 fw-normal">Форма авторизации</h1>
      </div>
      <Form.Group className="mb-2">
        <Form.Control
          type="email"
          size="lg"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={loading}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="password"
          size="lg"
          placeholder="Пароль"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={loading}
        />
      </Form.Group>

      {error && <Alert variant="danger">{error}</Alert>}

      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="w-100 mb-3"
        disabled={loading}
      >
        {loading ? (
          <Spinner
            animation="border"
            size="sm"
          />
        ) : (
          'Войти'
        )}
      </Button>

      <div className="text-center">
        <Link
          to="/auth/register"
          className="text-decoration-none"
        >
          Нет аккаунта? Зарегистрироваться
        </Link>
      </div>
    </Form>
  );
}
