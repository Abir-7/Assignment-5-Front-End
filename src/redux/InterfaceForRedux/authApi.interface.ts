export interface IAuthData {
  token: string;
  user: {
    email: string;
    _id: string;
    role: string;
  };
}
