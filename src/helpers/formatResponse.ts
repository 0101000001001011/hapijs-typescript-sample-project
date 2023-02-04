import { ResponseToolkit } from "@hapi/hapi";

type SuccessParamsType = {
  h: ResponseToolkit;
  data: any;
  message?: string;
  statusCode?: number;
};

type ErrorParamsType = {
  h: ResponseToolkit;
  message?: string;
  statusCode?: number;
};

export const sendSuccessResponse = ({ h, data, message = "success", statusCode = 200 }: SuccessParamsType) => {
  return h
    .response({
      message,
      success: true,
      statusCode,
      data,
    })
    .code(statusCode);
};

export const sendErrorResponse = ({ h, message = "something went wrong", statusCode = 500 }: ErrorParamsType) => {
  return h
    .response({
      message,
      success: false,
      statusCode,
    })
    .code(statusCode);
};
