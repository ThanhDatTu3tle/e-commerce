export interface SignUp {
  name: string,
  password: string,
  email: string,
}

export interface LogIn {
  password: string,
  email: string,
}

export interface Product {
  name: string,
  price: number,
  category: string,
  color: string,
  image: string,
  description: string,
}
