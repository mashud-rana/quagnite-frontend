import React from "react";
import styles from "./course.module.css";

const FiltersSidebar = ({ sections }) => {
  return (
    <aside className={styles.ic_sidebar}>
      {sections.map((section) => (
        <div key={section.title} className={styles.ic_filter_section}>
          <h5 className={styles.ic_filter_title}>{section.title}</h5>
          <hr className={styles.ic_hr} />
          <div className={styles.ic_filter_options}>
            {section.options.map((label) => (
              <label key={label} className={styles.ic_checkbox_label}>
                <input type="checkbox" className={styles.ic_checkbox} />
                <span className={styles.ic_checkbox_text}>{label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default FiltersSidebar;

// import React from "react";
// import styles from "./course.module.css";

// const FiltersSidebar = ({ sections }) => {
//   const renderCheckboxList = (items) =>
//     items.map((label) => (
//       <label key={label} className={styles.ic_checkbox_label}>
//         <input type="checkbox" className={styles.ic_checkbox} />
//         <span className={styles.ic_checkbox_text}>{label}</span>
//       </label>
//     ));

//   return (
//     <aside className={styles.ic_sidebar}>
//       {sections.map((section) => (
//         <div key={section.title} className={styles.ic_filter_section}>
//           <h5 className={styles.ic_filter_title}>{section.title}</h5>
//           <hr className={styles.ic_hr} />
//           <div className={styles.ic_filter_options}>
//             {renderCheckboxList(section.options)}
//           </div>
//         </div>
//       ))}
//     </aside>
//   );
// };

// export default FiltersSidebar;

// import React from "react";
// import styles from "./course.module.css";

// const FiltersSidebar = () => {
//   const waysToLearn = ["All", "Core courses", "Expanded courses", "Labs"];
//   const skillLevels = ["Advanced", "Beginner", "Intermediate"];
//   const subjects = [
//     "Business Professional",
//     "Creative Professional",
//     "Data Professional",
//     "Digital Marketer",
//     "IT Ops",
//     "Product Manager",
//   ];

//   const renderCheckboxList = (items) =>
//     items.map((label) => (
//       <label key={label} className={styles.ic_checkbox_label}>
//         <input type="checkbox" className={styles.ic_checkbox} />
//         <span className={styles.ic_checkbox_text}>{label}</span>
//       </label>
//     ));

//   return (
//     <aside className={styles.ic_sidebar}>
//       <div className={styles.ic_filter_section}>
//         <h5 className={styles.ic_filter_title}>Ways to learn</h5>
//         <hr className={styles.ic_hr} />
//         <div className={styles.ic_filter_options}>
//           {renderCheckboxList(waysToLearn)}
//         </div>
//       </div>

//       <div className={styles.ic_filter_section}>
//         <h5 className={styles.ic_filter_title}>Skill level</h5>
//         <hr className={styles.ic_hr} />
//         <div className={styles.ic_filter_options}>
//           {renderCheckboxList(skillLevels)}
//         </div>
//       </div>

//       <div className={styles.ic_filter_section}>
//         <h5 className={styles.ic_filter_title}>Subject</h5>
//         <hr className={styles.ic_hr} />
//         <div className={styles.ic_filter_options}>
//           {renderCheckboxList(subjects)}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default FiltersSidebar;
