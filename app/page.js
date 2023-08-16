"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();
  return (
    <div>
      <h1 className={styles.module}>This is Home Page</h1>
      <button
        onClick={() => {
          route.push("/profile");
        }}
      >
        Click here to Go
      </button>
    </div>
  );
};

export default page;
