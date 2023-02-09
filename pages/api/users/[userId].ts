// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../../database/conn";
import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseFuncs } from "@/lib/types";
import { getUser, putUser, deleteUser } from "@/database/controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  switch (method) {
    case "GET":
      getUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
