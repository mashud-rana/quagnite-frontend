import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";

const CommunityLayout = ({ children }) => {
  const profileTabs = [
    { href: "/coach/community", label: "Latest News", exact: true },
    { href: "/coach/community/events", label: "Events" },
    { href: "/coach/community/blogs", label: "Blogs" },
    { href: "/coach/community/reviews", label: "Reviews" },
  ];

  return (
    <div>
      <h1 className="ic_text_36 mb-24">Resources</h1>

      <ScrollableNavbar tabs={profileTabs} />

      <div>{children}</div>
    </div>
  );
};

export default CommunityLayout;
