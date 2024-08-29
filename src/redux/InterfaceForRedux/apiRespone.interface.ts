/* eslint-disable @typescript-eslint/no-explicit-any */
interface IErrorData {
  data: {
    success: boolean;
    statusCode: number;
    message: string;
    errorMessages: {
      path: string | number;
      message: string;
    }[];
  };
}

interface IData<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
  meta?: any;
}

export interface IRespone<T> {
  error?: IErrorData;
  data?: IData<T>;
}
