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
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" className={styles.back}>
            ← Back to home
          </Link>
        </div>
      )}
      <div>
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
