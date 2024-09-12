import DetailClasses from "@/frontends/components/detailClasses";
import { useRouter } from "next/router";
import React from "react";

const Dynamic = () => {
  const { query } = useRouter()
  return <div>
    <DetailClasses title={query.classes?.at(0)} />
  </div>;
};

export default Dynamic;
