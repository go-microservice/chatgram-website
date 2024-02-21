
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  // 其他用户信息...
}

export interface RegisterFormData {
  email: string;
  password: string;
  // 其他注册表单字段...
}

export interface LoginFormData {
  email: string;
  password: string;
  // 其他登录表单字段...
}

export interface ActivationRequest {
  email: string;
  token: string;
}

export interface ActivationResponse {
  success: boolean;
  message?: string;
}
