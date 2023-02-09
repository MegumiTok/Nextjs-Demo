// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../../database/conn";
import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseFuncs } from "@/lib/types";
import { getUsers, postUser, putUser } from "@/database/controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  // const { method } = req;
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  switch (method) {
    case "GET":
      // res.status(200).json({ method, name: "GET Request" });
      getUsers(req, res);
      break;
    case "POST":
      // res.status(200).json({ method, name: "POST Request" });
      postUser(req, res);
      break;
    case "PUT":
      // res.status(200).json({ method, name: "PUT Request" });
      putUser(req, res);
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
