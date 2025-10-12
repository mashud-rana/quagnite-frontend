"use client";

import EbookList from "@/components/Student/Ebook/EbookList/EbookList";
import SearchEbook from "@/components/Student/Ebook/SearchEbook/SearchEbook";
import React from "react";
import {Button} from "antd";
import {useRouter} from "next/navigation";

const EbookPage = () => {
    const navigator = useRouter();


    return (
        <>
            <div>
                <h1 className="ic_text_36 mb-12">Course Announcements</h1>
                <p className="mb-24">
                    <Button onClick={(e) => navigator.push('/teacher/course-announcements/create')}>Create</Button>
                </p>
            </div>

            {/* <SearchEbook /> */}
            <EbookList />
        </>
    );
};

export default EbookPage;