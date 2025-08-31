import ExamCard from "@/components/Student/Exam/ExamCard";

const Exam = () => {
  const filteredExams = [
    {
      id: "1",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "2",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "3",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "4",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264847",
      attempts: 2,
      time: "2:00 PM EST",
      date: "25 Nov 2024",
      status: "suggested",
      image: "/exam-study-image.png",
    },
    {
      id: "5",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264848",
      attempts: 1,
      time: "11:00 AM EST",
      date: "15 Nov 2024",
      status: "completed",
      image: "/exam-study-image.png",
    },
  ];
  return (
    <div className="examsGrid">
      {filteredExams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  );
};

export default Exam;
