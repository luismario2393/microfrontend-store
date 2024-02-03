import { Response } from "express";

export const getApi = async (res: Response) => {
  return res.status(200).end();
};
