import { type ReactNode } from "react";

import { Link, NavLink } from "react-router";

import clsx from "clsx";

import styles from "./header.module.css";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function HeaderComponent(): ReactNode {
  return (
    <div className={styles["header"]}>
      <Link to="/" className={styles.logo}>
        Movie Box
      </Link>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.href}
                className={({ isActive }) => clsx(isActive && styles.active)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
