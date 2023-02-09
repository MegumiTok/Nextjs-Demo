import { Schema, models, model } from "mongoose";

// OUR user SCHEMA
// スキーマを定義する
// スキーマとは、どのようなデータを格納するのかの定義のことです。
const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});

// OUR user MODEL
// 次にmodel関数を使ってUserモデルを定義します。
// model関数の第一引数には、モデルの対象となるコレクションの単数形の名前を入れます。mongooseはモデル名の小文字バージョンを自動的に検索するので、Userモデルはデータベース内のusersコレクションに該当します。
// また、第二引数にはスキーマを指定します。
// Existing one || new one
const Users = models.user || model("user", userSchema);

export default Users;
