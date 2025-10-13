import React, { useEffect, useState } from 'react';
import { Alert, Form, Button, Spinner } from 'react-bootstrap';
import record from '../../img/record.svg';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const API_BASE_URL =
    process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

  const handleInputChange = (field :string, value:string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Введите имя');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Введите email');
      return false;
    }
    if (!formData.password) {
      setError('Введите пароль');
      return false;
    }
    if (formData.password.length < 4) {
      setError('Пароль должен содержать минимум 4 символа');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return false;
    }
    return true;
  };

  const generateToken = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleSubmit = async (event:FixMeLater) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Проверяем, существует ли пользователь с таким email
      const existingUser = await axios.get(
        `${API_BASE_URL}/users?email=${formData.email}`
      );

      if (existingUser.data.length > 0) {
        setError('Пользователь с таким email уже существует');
        setLoading(false);
        return;
      }

      // Хэшируем пароль
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(formData.password, salt);

      // Создаем нового пользователя
      const newUser = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: hashedPassword,
        token: generateToken(),
        id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      };

      await axios.post(`${API_BASE_URL}/users`, newUser);

      setSuccess('Регистрация успешна! Перенаправляем на страницу входа...');

      // Перенаправляем на страницу входа через 2 секунды
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setError('Ошибка при регистрации. Попробуйте позже.');
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
        <h1 className="h3 mb-4 fw-normal">Регистрация</h1>
      </div>

      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          size="lg"
          placeholder="Имя"
          required
          value={formData.name}
          onChange={(event) => handleInputChange('name', event.target.value)}
          disabled={loading}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="email"
          size="lg"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(event) => handleInputChange('email', event.target.value)}
          disabled={loading}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="password"
          size="lg"
          placeholder="Пароль"
          required
          value={formData.password}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
          disabled={loading}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="password"
          size="lg"
          placeholder="Подтвердите пароль"
          required
          value={formData.confirmPassword}
          onChange={(event) =>
            handleInputChange('confirmPassword', event.target.value)
          }
          disabled={loading}
        />
      </Form.Group>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

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
          'Зарегистрироваться'
        )}
      </Button>

      <div className="text-center">
        <Link
          to="/auth"
          className="text-decoration-none"
        >
          Уже есть аккаунт? Войти
        </Link>
      </div>
    </Form>
  );
}
