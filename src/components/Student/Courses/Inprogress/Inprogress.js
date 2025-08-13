import CourseCard from "../Course/CourseCard";

const mockCourses = [
  {
    id: "1",
    title: "Blockchain Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
    level: "Beginner",
    duration: "1h 10m",
    date: "22 Nov 2024",
    rating: 4,
    students: 210,
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "2",
    title: "Blockchain Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
    level: "Beginner",
    duration: "1h 10m",
    date: "22 Nov 2024",
    rating: 4,
    students: 210,
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "3",
    title: "Blockchain Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
    level: "Beginner",
    duration: "1h 10m",
    date: "22 Nov 2024",
    rating: 4,
    students: 210,
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
];

const Inprogress = () => {
  return (
    <div className="ic_courses_list">
      {mockCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Inprogress;
