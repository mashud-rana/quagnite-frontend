import withAuth from "@/utils/withAuth";

const StudentDashboardLayout = ({ children }) => { 
  return (
    <>{children}</>
  )
}
export default StudentDashboardLayout;
// export default withAuth(StudentDashboardLayout,['student']);