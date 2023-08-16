// "use client";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     (async () => {
//       let res = await fetch("https://dummyjson.com/products");
//       let json = await res.json();
//       setData(json["products"]);
//     })();
//   }, []);
//   return (
//     <div>
//       {data.map((item, index) => {
//         return <h1>{item["title"]}</h1>;
//       })}
//       <h1>This is Contact Page</h1>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setData(json["products"]);
    })();
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return <h1>{item["title"]}</h1>;
      })}
      <h1>This is Contact page</h1>
    </div>
  );
};

export default page;
