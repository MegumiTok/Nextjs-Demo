import Layout from "../../components/layout";
import Head from "next/head";
import { FiUserPlus } from "react-icons/fi";
import Table from "@/components/table";
export default function Employee() {
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
              <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-300 hover:border-indigo-300  hover:text-gray-800">
                Add Employees{" "}
                <span className="px-1">
                  <FiUserPlus size={23}></FiUserPlus>
                </span>
              </button>
            </div>

            {/* collapsible form */}
          </div>
          {/* table */}
          <div className="container mx-auto">
            <Table></Table>
          </div>
        </main>
      </section>
    </Layout>
  );
}
