import Layout from "../../components/layout";
import Head from "next/head";
import { BiUserPlus, BiX, BiCheck } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import Table from "@/components/table";
import Form from "@/components/form";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleChangeAction, deleteAction } from "@/redux/reducer";
import { deleteUser, getUsers } from "@/lib/helper";
import { useQueryClient } from "react-query";

export default function Employee() {
  // const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const queryclient = useQueryClient();
  const deleteId = useAppSelector(
    (state) => state.employeeManagement.client.deleteId
  );
  const visible = useAppSelector(
    (state) => state.employeeManagement.client.toggleForm
  );

  const handler = () => {
    // setVisible(true);
    // setVisible(visible ? false : true);
    // setVisible(!visible);
    dispatch(toggleChangeAction());
  };

  const deletehandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryclient.prefetchQuery("users", getUsers);
      await dispatch(deleteAction(null));
    }
  };

  const canclehandler = async () => {
    console.log("cancel");
    await dispatch(deleteAction(null));
  };
  return (
    <Layout>
      <section>
        <Head>
          <title>Employee Management</title>
        </Head>
        <main className="py-5 ">
          <h1 className="text-xl md:text-5xl font-bold text-center py-10">
            Employee Management
          </h1>

          <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="left flex gap-3">
              <button
                onClick={handler}
                className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-300 hover:border-indigo-300  hover:text-gray-800"
              >
                Add Employees{" "}
                <span className="px-1">
                  <FiUserPlus size={23}></FiUserPlus>
                </span>
              </button>
            </div>

            {deleteId ? (
              DeleteComponent({ deletehandler, canclehandler })
            ) : (
              <></>
            )}
          </div>
          {/* collapsible form */}

          {visible ? <Form></Form> : <></>}

          {/* table */}
          <div className="container mx-auto ">
            <Table></Table>
          </div>
        </main>
      </section>
    </Layout>
  );
}

function DeleteComponent({ deletehandler, canclehandler }) {
  return (
    <div className="flex gap-5">
      <button>Are you sure?</button>
      <button
        onClick={deletehandler}
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50"
      >
        Yes{" "}
        <span className="px-1">
          <BiX color="rgb(255 255 255)" size={25} />
        </span>
      </button>
      <button
        onClick={canclehandler}
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50"
      >
        No{" "}
        <span className="px-1">
          <BiCheck color="rgb(255 255 255)" size={25} />
        </span>
      </button>
    </div>
  );
}
