import React from "react";
import { useRouter } from "next/router";
import Class from "@/frontends/components/class";

const Dynamic = () => {
  const { query } = useRouter();
  let Component;
  switch (query.slug) {
    case "class":
      Component = <Class />;
      break;
  }
  return Component;
};

export default Dynamic;
