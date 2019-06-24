interface Props {
  count?: number
  name?:string,
  number?:number
}

interface signupState {
  name: string,
  email: string,
  phone: string,
  password: string,
  repeatepassword: string,
  error: boolean,
  message: string,
};

interface loginState {
  email: string,
  password: string,
  message: string,
  token:string
};

export {
  Props,
  signupState,
  loginState
}