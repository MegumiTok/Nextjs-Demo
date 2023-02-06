// import Footer from './footer'
import styles from "./layout.module.css";
import Link from "next/link";
export default function layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <div className={styles.container}>
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" className={styles.back}>
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
