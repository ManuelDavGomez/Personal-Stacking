"use client";

import Api from "@/app/components/apiCall/Api.jsx";
import PagesLayout from "../../pagesLayout.jsx";

const page = () => {
  return (
    <PagesLayout>
      <Api />
    </PagesLayout>
  );
};

export default page;
