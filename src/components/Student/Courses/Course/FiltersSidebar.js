"use client";
import React, {useState, useEffect} from "react";
import styles from "./course.module.css";
// import {useGetCategoriesQuery} from "@/redux/features/student/category/categoryApi";
// import {useGetDifficultyLevelsQuery} from "@/redux/features/student/difficultyLevel/difficultyLevelApi";
import {useGetCourseFiltersQuery} from "@/redux/features/student/course/courseApi";
import { useRouter, useSearchParams } from "next/navigation";
import {useDispatch, useSelector } from "react-redux";
import { setPage, setFilters, emptyAllCourses } from "@/redux/features/student/course/courseSlice";


const FiltersSidebar = () => {
  // Hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const {filters} = useSelector((state) => state.course);

  // Fetch filter data (categories, difficulties, subjects)
  const {
    data: filtersData,
    isSuccess: filtersIsSuccess,
    isLoading: filtersIsLoading,
    error: filtersError,
    refetch: filtersRefetch,
    isFetching: filtersIsFetching,
  } = useGetCourseFiltersQuery();

  /**
   * Update URL query params and reset page on filter/search change
   */
  const updateQuery = (key, values) => {
    const params = new URLSearchParams(searchParams.toString());
    if (values.length > 0) {
      params.set(key, values.join(","));
    } else {
      params.delete(key);
    }
    
    if(key === 'category_ids'){
      dispatch(setFilters({
        ...filters,
        category_ids: values.join(","),
      }));
    }
    dispatch(setPage(1));
  
    router.push(`/student/courses?${params.toString()}`);
  };

  /**
   * Toggle an ID in a comma-separated string of IDs
   */
  function toggleArray(existing, id) {
    const arr = existing && existing != '' ? existing.split(",") : [];
    return arr.includes(String(id))
      ? arr.filter((x) => x !== String(id))
      : [...arr, String(id)];
  }

  const checkedFilterHandler = (existing, id, event) => {
    console.log("Existing:", existing, id, event);

  };


  return (
    <aside className={styles.ic_sidebar}>
      <div className={styles.ic_filter_section}>
        <h5 className={styles.ic_filter_title}>Ways to learn</h5>
        <hr className={styles.ic_hr} />
        <div className={styles.ic_filter_options}>
          <label className={styles.ic_checkbox_label}>
          <input
            type="checkbox"
            className={styles.ic_checkbox}
            checked={
              filtersData &&
              filtersData.data.categories.length > 0 &&
              filters.category_ids.length > 0 &&
              filters.category_ids.split(",").length === filtersData.data.categories.length
            }
            onChange={() => {
              const allIds = filtersData.data.categories.map((cat) => String(cat.id));
              updateQuery(
                "category_ids",
                filters.category_ids.split(",").length === filtersData.data.categories.length
                  ? [] // Uncheck all
                  : allIds // Check all
              );
            }}
          />
            
            <span className={styles.ic_checkbox_text}>All</span>
          </label>
          {
            filtersData && filtersData.data.categories.length > 0 && filtersData.data.categories.map((category) => (
              <label key={category?.id} className={styles.ic_checkbox_label}>
                <input
                  type="checkbox"
                  className={styles.ic_checkbox}
                  checked={filters.category_ids.length > 0 && filters.category_ids.split(",").includes(String(category?.id))}
                  onChange={() =>
                    updateQuery(
                      "category_ids",
                      toggleArray(filters.category_ids, category.id)
                    )
                  }
                />
                <span className={styles.ic_checkbox_text}>{category?.name || "All"}</span>
              </label>
            ))
          }
          
        
        </div>
      </div>    

      {/* <div className={styles.ic_filter_section}>
        <h5 className={styles.ic_filter_title}>Skill level</h5>
        <hr className={styles.ic_hr} />
        <div className={styles.ic_filter_options}>
          <label className={styles.ic_checkbox_label}>
            <input type="checkbox" className={styles.ic_checkbox}   />
            <span className={styles.ic_checkbox_text}>All</span>
          </label>
          {
            filtersData && filtersData.data.difficulties.length > 0 && filtersData.data.difficulties.map((level)=>(
              <label key={level?.id} className={styles.ic_checkbox_label}>
                <input type="checkbox" className={styles.ic_checkbox}
                  checked={filters.difficulty_level_ids.split(",").includes(String(level?.id))}
                  onChange={() => updateQuery(
                    "difficulty_level_ids",
                    toggleArray(filters.difficulty_level_ids, level?.id)
                  )}
                />
                <span className={styles.ic_checkbox_text}>{level?.title || ""}</span>
              </label>
            ))
          }
        
        </div>
      </div>   
      <div className={styles.ic_filter_section}>
        <h5 className={styles.ic_filter_title}>Subject</h5>
        <hr className={styles.ic_hr} />
        <div className={styles.ic_filter_options}>
            <label className={styles.ic_checkbox_label}>
              <input type="checkbox" className={styles.ic_checkbox} />
              <span className={styles.ic_checkbox_text}>All</span>
            </label>
          {
            filtersData && filtersData.data.course_subjects.length > 0 && filtersData.data.course_subjects.map((subject)=>(
              <label key={subject?.id} className={styles.ic_checkbox_label}>
              <input type="checkbox" className={styles.ic_checkbox} />
              <span className={styles.ic_checkbox_text}>
                  {subject?.course_title?.length > 25
                ? subject.course_title.slice(0, 25) + "..."
                : subject.course_title || ""}
              </span>
            </label>
            ))
          }
        
        </div>
      </div>    */}
    </aside>
    // <aside className={styles.ic_sidebar}>
    //   {sections.map((section) => (
    //     <div key={section.title} className={styles.ic_filter_section}>
    //       <h5 className={styles.ic_filter_title}>{section.title}</h5>
    //       <hr className={styles.ic_hr} />
    //       <div className={styles.ic_filter_options}>
    //         {section.options.map((label) => (
    //           <label key={label} className={styles.ic_checkbox_label}>
    //             <input type="checkbox" className={styles.ic_checkbox} />
    //             <span className={styles.ic_checkbox_text}>{label}</span>
    //           </label>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </aside>
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
