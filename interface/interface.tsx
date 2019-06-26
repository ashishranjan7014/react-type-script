interface Props {
  count?: number
  name?: string,
  number?: number
}

interface SignupState {
  name: string,
  email: string,
  phone: string,
  password: string,
  repeatepassword: string,
  error: boolean,
  message: string,
};

interface LoginState {
  email: string,
  password: string,
  message: string,
  token: string
};

export {
  Props,
  SignupState,
  LoginState
}