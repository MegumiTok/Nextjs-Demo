import Link from "next/link";
import headerStyles from "./header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.container}>
      <li className={headerStyles.list}>
        <Link href="/">Home</Link>
      </li>
      <li className={headerStyles.list}>
        <Link href="/todo">ToDo</Link>
      </li>
      <li className={headerStyles.list}>
        <Link href="/employee">Employee Management</Link>
      </li>
    </div>
  );
}
