/**controller */
import Users from "@/lib/userModel";
import type { NextApiRequest, NextApiResponse } from "next";

// get:http://localhost:3000/api/users
export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });
    // res.status(200).json({ user: "GET Request" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/[id]
export async function putUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      // 変更した分をみる場合
      // await Users.findByIdAndUpdate(userId, formData);
      // res.status(200).json(formData);

      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user); //<--  変更するuserの情報をみる場合
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    return res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/users/[id]
export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      // return res.status(200).json({ deleted: userId });
      return res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    return res.status(404).json({ error: "Error While Deleting the Data...!" });
  }
}
