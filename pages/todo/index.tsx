import { useState } from "react";
import ToDoStyles from "../../styles/ToDo.module.css";
import Layout from "../../components/layout";
import Head from "next/head";
export default function ToDo() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  function addList() {
    if (todo) {
      setList([...list, todo]);
      setTodo("");
    } else {
      alert("文字を入力してください");
      setTodo("");
    }
  }

  function deleteTodo(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <Layout>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <header>
        <h1>TODO LIST</h1>
      </header>

      <div className={ToDoStyles.container}>
        <div className={ToDoStyles.input_wrap}>
          <input
            type="text"
            name="todo"
            placeholder="todo"
            onChange={(data) => setTodo(data.target.value)}
            value={todo}
            className={ToDoStyles.input}
          />
          <button
            onClick={addList}
            className={`${ToDoStyles.button} ${ToDoStyles.button_add}`}
          >
            add
          </button>
        </div>
        <div className={ToDoStyles.todo_wrap}>
          <ul className={ToDoStyles.ul}>
            {list.map((todo, index) => {
              return (
                <div key={index} className={ToDoStyles.list_wrap}>
                  <li className={ToDoStyles.list}>{todo}</li>
                  <div className={ToDoStyles.changeButton}>
                    <button
                      className={`${ToDoStyles.button} ${ToDoStyles.button_edit}`}
                    >
                      edit
                    </button>

                    <button
                      onClick={() => deleteTodo(index)}
                      className={`${ToDoStyles.button} ${ToDoStyles.button_delete}`}
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
