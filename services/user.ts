import { RegisterFormData, LoginFormData, User, ActivationRequest, ActivationResponse } from '@/types/user';

const BASE_URL = 'http://your-api-url.com';

export const register = async (formData: RegisterFormData): Promise<User> => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  return response.json();
};

export const login = async (formData: LoginFormData): Promise<User> => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  return response.json();
};

export const getUserInfo = async (): Promise<User> => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 你的登录凭证，可能是 token、cookie 等
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get user info');
  }

  return response.json();
};

export const getUserByEmail = async (email: string): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users?email=${email}`);
  
  if (!response.ok) {
    throw new Error('Failed to get user by email');
  }
  
  const user = await response.json();
  return user;
};

export const activateUser = async (requestData: ActivationRequest): Promise<ActivationResponse> => {
  const response = await fetch(`${BASE_URL}/activate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to activate user');
  }
  
  const data: ActivationResponse = await response.json();
  return data;
};