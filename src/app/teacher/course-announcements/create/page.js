"use client";

import React from "react";
import {Button} from "antd";
import {useRouter} from "next/navigation";
import { Input } from 'antd';
import styles from "./course-announcements.module.css";
import {Controller, useForm} from "react-hook-form";
import dynamic from "next/dynamic";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
// import {useAnnouncementsMutation} from "@/redux/features/teacher/announcements/announcementsApi";

const JoditEditor = dynamic(() => import ("@/components/Share/Editor/JoditEditor/JoditEditor"), {ssr: false});

const schema = yup.object({
    announcements_title: yup
        .string()
        .required("Announcements Title is required")
        .max(100, "Title must be at most 100 characters"),
    announcements_description:  yup.string().required("Announcements Description is required")
});

const EbookPage = () => {
    const navigator = useRouter();

    // Form Validation
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        setValue,
        setError,
        control,
        watch,
        reset
    } = useForm({resolver: yupResolver(schema)});

    // Redux
    // const [
    //     announcements, {
    //     isLoading,
    //         isError,
    //         error
    // }] = useAnnouncementsMutation();

    const onSubmit = (data) => {
        console.log(data);
        announcements(data).then((res) => {
            if (res?.data?.status) {
                navigator.push('/teacher/course-announcements');
            }
        });
    };


    return (
        <>
            <div>
                <h1 className="ic_text_36 mb-12">Create Course Announcements</h1>
                <p className="mb-24">
                    <Button onClick={(e) => navigator.push('/teacher/course-announcements')}>Back</Button>
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* 1st section  */}
                <div className={styles.section}>
                    <h5 className={styles.sectionTitle}>Announcements</h5>

                    <div className={styles.ic_details_wrapper}>
                        <div className={styles.formRow}>
                            <label className={styles.label}>Announcements Title</label>
                            <div className={styles.inputContainer}>
                                <input {...register('announcements_title')} className={styles.input} placeholder="Announcements Title" />
                                <small
                                    className="text-danger"
                                    style={{
                                        color: "red"
                                    }}>
                                    {errors.announcements_title
                                        ?.message}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ic_details_wrapper} style={{marginTop: "24px"}}>
                        <div className={styles.formRow}>
                            <label className={styles.label}>Announcements Description</label>
                            <div className={styles.inputContainer}>
                                <Controller
                                    name="announcements_description"
                                    control={control}
                                    render={({field}) => (<JoditEditor
                                        {...field}
                                        editorValue={field.value}
                                        setEditorValue={field.onChange}/>)}
                                />
                                <small
                                    className="text-danger"
                                    style={{
                                        color: "red"
                                    }}>
                                    {errors.announcements_description
                                        ?.message}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ic_flex">
                    <button type="button" onClick={() => navigator.push('/teacher/course-announcements')} className="ic_btn">
                        BACK
                    </button>
                    <button type="submit" className="ic_btn">
                        SAVE AND CONTINUE
                    </button>
                </div>
            </form>
        </>
    );
};

export default EbookPage;