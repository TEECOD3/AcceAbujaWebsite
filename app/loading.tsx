import { Loading } from "@/components/icons/Loadingicon";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default loading;
