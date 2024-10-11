import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faUnlockAlt,
  faEyeLowVision,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Form, Button, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validation from '../../components/functions/LoginValidation';

const LoginWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f9fc;
`;

const LoginContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  width: 100%;
  height: 80vh;
  max-width: 500px;
  text-align: center;
`;

const Logo = styled.img`
  margin-bottom: 20px;
  width: 80%;
  max-width: 350px;
`;

const Title = styled.h3`
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
`;

const CustomFormGroup = styled(Form.Group)`
  position: relative;
  margin-bottom: 1.5rem;
  margin: 30px 2px 30px 2px;

  label {
    text-align: left;
    display: block;
    margin: 5px;
  }
`;

const InputWithIcon = styled(InputGroup)`
  position: relative;

  .input-group-text {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none !important;
    color: #999;
  }

  .form-control {
    padding-left: 50px;
    border-radius: 10px;
    height: 40px;
    width: 90%;
    border: 1px solid #ced4da;
  }

  &::before {
    content: '';
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: #ced4da;
  }
`;

const StyledButton = styled(Button)`
  background-color: #28a745;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
  width: 100%;
  &:hover {
    background-color: #218838;
    cursor: pointer;
  }
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          'http://127.0.0.1:4343/api/v1/login',
          values
        );
        if (response.data.success) {
          const token = response.data.token.access_token;
          localStorage.setItem('token', token);
          navigate('/admin/dashboard');
        } else {
          setErrors({ server: response.data.message });
        }
      } catch (error) {
        setErrors({ server: 'Login failed. Please try again later.' });
      }
    }
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <Logo src='/Imgs/logo.png' alt='Logo' />
        <Title>Moonsnacks</Title>
        <Form onSubmit={handleSubmit}>
          <CustomFormGroup controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <InputWithIcon>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control
                type='email'
                placeholder='user@mindsinaction.com.na'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className='text-danger'>{errors.email}</span>
              )}
            </InputWithIcon>
          </CustomFormGroup>

          <CustomFormGroup controlId='password'>
            <Form.Label>Password</Form.Label>
            <InputWithIcon>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUnlockAlt} />
              </InputGroup.Text>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                name='password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className='text-danger'>{errors.password}</span>
              )}
              <InputGroup.Text
                onClick={handleShowPassword}
                style={{ right: '10px', left: 'unset', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={showPassword ? faEyeLowVision : faEye} />
              </InputGroup.Text>
            </InputWithIcon>
          </CustomFormGroup>

          {errors.server && <p className='text-danger'>{errors.server}</p>}

          <StyledButton type='submit'>Login</StyledButton>
        </Form>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
