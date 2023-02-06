import Layout from "../../components/layout";
import Head from "next/head";
export default function Employee() {
  return (
    <Layout>
      <section>
        <Head>
          <title>Employee Management</title>
        </Head>
        <header>
          <h1 className="text-xl md:text-5xl font-bold text-center py-10">
            Employee Management
          </h1>
        </header>
      </section>
    </Layout>
  );
}
