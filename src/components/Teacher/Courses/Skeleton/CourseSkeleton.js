"use client";
import styles from "@/app/teacher/(courses)/courses.module.css";
import {Card, Skeleton} from "antd";

const CourseSkeleton = ({loop}) => {

    return (
        <>
            {Array.from({length: loop}).map((_, i) => (
                <Card className={styles.coachCard} key={i}>
                    <Skeleton.Image
                        active
                        style={{
                            width: "325px",
                            height: 250,
                            borderRadius: "12px",
                        }}
                    />
                    <div style={{marginTop: 16}}>
                        {/*<Skeleton.Input active size="small" style={{ width: "330%" }} />*/}
                        <Skeleton paragraph={{rows: 1, width: '100%'}}/>
                        <div style={{float: "right", display: "flex", gap: 10, marginTop: 10}}>
                            <Skeleton.Button active size="small" shape="circle"/>
                            <Skeleton.Button active size="small" shape="circle"/>
                        </div>
                    </div>
                </Card>))}
        </>
    );
};

export default CourseSkeleton;
