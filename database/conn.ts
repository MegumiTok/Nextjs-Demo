// connection file
//  we don't have to write the connection code over and over again, let's write it in one file and export the connection so it can be used in our different API routes.
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI as string);
    mongoose.set("strictQuery", false);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    console.log("Mongoose Connection failed to established");
    return Promise.reject(errors);
  }
};

export default connectMongo;
