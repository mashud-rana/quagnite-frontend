import EbookList from "@/components/Student/Ebook/EbookList/EbookList";
import SearchEbook from "@/components/Student/Ebook/SearchEbook/SearchEbook";
import React from "react";

const EbookPage = () => {
  return (
    <div>
      <h1 className="ic_text_36 mb-12">E-Books</h1>
      <p className="mb-24">
        All The Classes that you are watching all over the time
      </p>

      <SearchEbook />

      <EbookList />
    </div>
  );
};

export default EbookPage;
