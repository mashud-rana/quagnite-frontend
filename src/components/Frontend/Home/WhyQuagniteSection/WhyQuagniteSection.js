import styles from "./whyQuagnite.module.css";

const features = [
  {
    id: 1,
    title: "Education",
    description:
      "By offering tailored learning methods, Quagnite fosters a love of learning and enables every student to succeed.",
    dotColor: "#6366f1",
    isActive: true,
  },
  {
    id: 2,
    title: "Certification",
    description:
      "The pace of tech is high. Quagnite certifications show the world competency across a broad range of high-demand subjects.",
    dotColor: "#1f2937",
    isActive: false,
  },
  {
    id: 3,
    title: "Community",
    description:
      "Stronger together. Quagnite students gain instant networking opportunities and can have their skills displayed directly to potential employers.",
    dotColor: "#1f2937",
    isActive: false,
  },
];

export default function WhyQuagniteSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subtitle}>WHY QUAGNITE?</p>
          <h2 className={styles.title}>
            Education <span className={styles.highlight}>suitable</span> to you
          </h2>
          <p className={styles.description}>
            Quagnite offers an efficient process from education to employment.
            Join a pipeline of training and education that opens up
            opportunities for a better future.
          </p>
        </div>

        {/* Features Timeline */}
        <div className={styles.featuresContainer}>
          <div className={styles.timeline}>
            {features.map((feature, index) => (
              <div key={feature.id} className={styles.featureItem}>
                <div className={styles.dotContainer}>
                  <div
                    className={`${styles.dot} ${
                      feature.isActive ? styles.activeDot : ""
                    }`}
                    style={{ backgroundColor: feature.dotColor }}
                  />
                  {index < features.length - 1 && (
                    <div className={styles.line} />
                  )}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardWrapper}>
            {/* Left Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.userProfile}>
                <div className={styles.avatar}>
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Samantha"
                  />
                  <div className={styles.statusDot} />
                </div>
                <div className={styles.userInfo}>
                  <h4>Samantha</h4>
                  <p>samantha@email.com</p>
                </div>
              </div>

              <nav className={styles.navigation}>
                <div className={styles.navItem}>
                  <span>Dashboard Overview</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "75%" }} />
                  </div>
                  <span className={styles.percentage}>75%</span>
                </div>
                <div className={styles.navItem}>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "60%" }} />
                  </div>
                  <span className={styles.percentage}>60%</span>
                </div>
                <div className={styles.menuItems}>
                  <div className={styles.menuItem}>Recommended</div>
                  <div className={styles.menuItem}>Targets</div>
                  <div className={styles.menuItem}>Achievements</div>
                  <div className={styles.menuItem}>Settings</div>
                </div>
              </nav>
            </div>

            {/* Main Dashboard */}
            <div className={styles.mainDashboard}>
              <div className={styles.dashboardHeader}>
                <h3>Quagnite</h3>
                <div className={styles.userAvatars}>
                  <img src="/placeholder.svg?height=24&width=24" alt="User 1" />
                  <img src="/placeholder.svg?height=24&width=24" alt="User 2" />
                  <img src="/placeholder.svg?height=24&width=24" alt="User 3" />
                </div>
              </div>

              <div className={styles.todaySection}>
                <h4>Today</h4>
                <div className={styles.courseList}>
                  <div className={styles.courseItem}>
                    <div
                      className={styles.courseIcon}
                      style={{ backgroundColor: "#3b82f6" }}
                    >
                      <span>L</span>
                    </div>
                    <div className={styles.courseInfo}>
                      <h5>Lorem Ipsum 1</h5>
                      <p>Lorem ipsum dolor</p>
                    </div>
                    <span className={styles.courseTime}>09:00</span>
                  </div>

                  <div className={styles.courseItem}>
                    <div
                      className={styles.courseIcon}
                      style={{ backgroundColor: "#8b5cf6" }}
                    >
                      <span>L</span>
                    </div>
                    <div className={styles.courseInfo}>
                      <h5>Lorem Ipsum 2</h5>
                      <p>Lorem ipsum dolor</p>
                    </div>
                    <span className={styles.courseTime}>10:00</span>
                  </div>

                  <div className={styles.courseItem}>
                    <div
                      className={styles.courseIcon}
                      style={{ backgroundColor: "#f59e0b" }}
                    >
                      <span>L</span>
                    </div>
                    <div className={styles.courseInfo}>
                      <h5>Lorem Ipsum 3</h5>
                      <p>Lorem ipsum dolor</p>
                    </div>
                    <span className={styles.courseTime}>11:00</span>
                  </div>
                </div>

                <div className={styles.dateSection}>
                  <p>Monday, 23 March 2020</p>
                  <div className={styles.additionalCourses}>
                    <div className={styles.courseItem}>
                      <div
                        className={styles.courseIcon}
                        style={{ backgroundColor: "#ef4444" }}
                      >
                        <span>T</span>
                      </div>
                      <div className={styles.courseInfo}>
                        <h5>Technical Skills</h5>
                        <p>Lorem ipsum dolor</p>
                      </div>
                      <span className={styles.courseTime}>100:000</span>
                    </div>

                    <div className={styles.courseItem}>
                      <div
                        className={styles.courseIcon}
                        style={{ backgroundColor: "#10b981" }}
                      >
                        <span>I</span>
                      </div>
                      <div className={styles.courseInfo}>
                        <h5>Introduction</h5>
                        <p>Lorem ipsum dolor</p>
                      </div>
                      <span className={styles.courseTime}>30:20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className={styles.rightPanel}>
              <div className={styles.ongoingCourses}>
                <h4>Ongoing Courses</h4>
                <div className={styles.courseProgress}>
                  <div className={styles.progressItem}>
                    <span>Course Name</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div className={styles.progressItem}>
                    <span>Course Name</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                  <div className={styles.progressItem}>
                    <span>Course Name</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                  <div className={styles.progressItem}>
                    <span>Course Name</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <button
                    className={styles.actionBtn}
                    style={{ backgroundColor: "#ef4444" }}
                  >
                    ×
                  </button>
                  <button
                    className={styles.actionBtn}
                    style={{ backgroundColor: "#10b981" }}
                  >
                    ✓
                  </button>
                </div>

                <div className={styles.chartSection}>
                  <h5>Progress Chart with us</h5>
                  <div className={styles.chart}>
                    <svg viewBox="0 0 200 60" className={styles.chartSvg}>
                      <path
                        d="M10,40 Q50,20 100,30 T190,25"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <button className={styles.viewTipsBtn}>VIEW TIPS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={styles.decorativeCards}>
          <div className={styles.card} style={{ backgroundColor: "#e0e7ff" }}>
            <div className={styles.cardIcon}>💳</div>
          </div>
          <div className={styles.card} style={{ backgroundColor: "#fed7aa" }}>
            <div className={styles.cardIcon}>📊</div>
          </div>
        </div>
      </div>
    </section>
  );
}
