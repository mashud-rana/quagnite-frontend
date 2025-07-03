import { Tabs } from "antd";
import styles from "./difference.module.css";
import img1 from "@/assets/images/industries/difference.png";
import icon1 from "@/assets/images/industries/dif-icn.png";
import icon2 from "@/assets/images/about/img1.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const tabData = [
  {
    key: "1",
    label: "Personalized Training",
    title: "Personalized Training",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor at nibh mollis in id magna. Fusce elementum at lacus vel viverra. Sed id massa purus.",
    image: img1,
    icon: icon1,
  },
  {
    key: "2",
    label: "Success Coach",
    title: "Your Path to Success",
    subtitle: "Get guidance from experienced coaches at every step.",
    image: img1,
    icon: icon2,
  },
  {
    key: "3",
    label: "Proctored exams",
    title: "Secure Exam Environment",
    subtitle: "Take monitored exams for a trusted certification process.",
    image: img1,
    icon: icon1,
  },
  {
    key: "4",
    label: "Flexible payments",
    title: "Pay Your Way",
    subtitle: "Choose from multiple payment options that suit your budget.",
    image: img1,
    icon: icon1,
  },
  {
    key: "5",
    label: "Scholarships",
    title: "Financial Support Available",
    subtitle: "Apply for scholarships to reduce your learning costs.",
    image: img1,
    icon: icon1,
  },
  {
    key: "6",
    label: "Community Engagement",
    title: "Join the Community",
    subtitle: "Engage with a vibrant community of learners and mentors.",
    image: img1,
    icon: icon1,
  },
  {
    key: "7",
    label: "API Intermigration",
    title: "Powerful API Integration",
    subtitle: "Easily connect your tools with our flexible APIs.",
    image: img1,
    icon: icon1,
  },
  {
    key: "8",
    label: "Dedicated Account Manager",
    title: "Personal Support",
    subtitle: "A dedicated expert to help you at every step.",
    image: img1,
    icon: icon1,
  },
];

const items = tabData.map((tab) => ({
  key: tab.key,
  label: <p className={styles.ic_font}>{tab.label}</p>,
  children: (
    <div className={styles.ic_tab_content}>
      <div className={styles.ic_tab_grid}>
        {/* Left Column */}
        <div className={styles.ic_left_col}>
          <h4>{tab.title}</h4>
          <p className={styles.ic_width}>{tab.subtitle}</p>
        </div>

        {/* Right Column */}
        <div className={styles.ic_right_col}>
          <Image src={tab.image} alt="Main" className={styles.ic_main_image} />
          <Image
            src={tab.icon}
            alt="Decorative"
            className={styles.ic_small_icon}
          />
        </div>
      </div>
    </div>
  ),
}));
const Difference = () => {
  return (
    <div className="ic_white ic_section_space_top">
      <div className="container">
        <div>
          <CardAnimation index={0} direction="left">
            <h6>WHY US</h6>
          </CardAnimation>
          <CardAnimation index={0} direction="up">
            <h3 className={styles.ic_title}>The Quagnite Difference</h3>
          </CardAnimation>
        </div>

        <div>
          <section className={styles.ic_tab_container}>
            <div>
              <Tabs
                defaultActiveKey="1"
                items={items}
                tabPosition="top"
                className="antdTabs"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Difference;
