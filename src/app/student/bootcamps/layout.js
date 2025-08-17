import BootcampHeading from "@/components/Student/Bootcamps/BootcampHeading/BootcampHeading";
import BootcampNavber from "@/components/Student/Bootcamps/BootcampNavber/BootcampNavber";

const BootcampLayout = ({ children }) => {
  return (
    <div>
      <BootcampHeading />

      <div className="ic_layout_border">
        <BootcampNavber />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BootcampLayout;
