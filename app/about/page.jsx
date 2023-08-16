import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();
  return json["products"];
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item, index) => {
        return <h1>{item["title"]}</h1>;
      })}
      <h1>This is About Page</h1>
    </div>
  );
};

export default page;
