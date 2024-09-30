"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // You can add any custom error handling logic here if needed, or leave it empty
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
