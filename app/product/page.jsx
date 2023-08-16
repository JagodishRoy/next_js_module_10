"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const param = useSearchParams();
  return (
    <div>
      <h1>{param.get("name")}</h1>
      <h1>This is Product Page</h1>
    </div>
  );
};

export default page;
