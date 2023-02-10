import Layout from "../../components/layout";
import Head from "next/head";
import { FiUserPlus } from "react-icons/fi";
import Table from "@/components/table";
import Form from "@/components/form";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleChangeAction } from "@/redux/reducer";

export default function Employee() {
  // const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const visible = useAppSelector(
    (state) => state.employeeManagement.client.toggleForm
  );

  const handler = () => {
    // setVisible(true);
    // setVisible(visible ? false : true);
    // setVisible(!visible);
    dispatch(toggleChangeAction());
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
