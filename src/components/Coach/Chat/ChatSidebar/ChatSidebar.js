// import React from "react";
// import styles from "./chatSidebar.module.css";
// import img from "@/assets/images/all/instractor.png";
// import Image from "next/image";

// const chats = [
//   {
//     id: 1,
//     name: "Lorem Ipsum",
//     message: "Lorem Ipsum Dolet sert amet.....",
//     time: "04:45 pm",
//     unread: 99,
//     avatar: "/diverse-person.png",
//   },
//   {
//     id: 2,
//     name: "Lorem Ipsum",
//     message: "Hi,What new project?",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/diverse-group-two.png",
//   },
//   {
//     id: 3,
//     name: "Lorem Ipsum",
//     message: "Lorem Ipsum Dolor sert amet, consectetur adipiscin.....",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/diverse-group-outdoors.png",
//   },
//   {
//     id: 4,
//     name: "Lorem Ipsum",
//     message: "Lorem Ipsum Dolor sert amet, consectetur adipiscin.....",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/diverse-group-four.png",
//   },
// ];

// const groups = [
//   {
//     id: 1,
//     name: "Lorem Ipsum",
//     message: "Lorem Ipsum Dolor sert amet.....",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/group-one.png",
//   },
//   {
//     id: 2,
//     name: "Lorem Ipsum",
//     message: "Hi,What new project?",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/group-two.png",
//   },
//   {
//     id: 3,
//     name: "Lorem Ipsum",
//     message: "Lorem Ipsum Dolor sert amet, consectetur adipiscin.....",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/group-3.png",
//   },
//   {
//     id: 4,
//     name: "Lorem Ipsum",
//     message: "Lorem Ipsum Dolor sert amet, consectetur adipiscin.....",
//     time: "04:45 pm",
//     unread: 0,
//     avatar: "/group-of-four.png",
//   },
// ];

// const ChatSidebar = () => {
//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.section}>
//         <h2 className={styles.sectionTitle}>Chats</h2>
//         <div className={styles.list}>
//           {chats.map((chat) => (
//             <div key={chat.id} className={styles.listItem}>
//               <div className={styles.itemAvatar}>
//                 <Image src={img} alt={chat.name} />
//                 {chat.id === 1 && (
//                   <span className={styles.onlineIndicator}></span>
//                 )}
//               </div>
//               <div className={styles.itemContent}>
//                 <div className={styles.itemHeader}>
//                   <span className={styles.itemName}>{chat.name}</span>
//                   <span className={styles.itemTime}>{chat.time}</span>
//                 </div>
//                 <div className={styles.itemFooter}>
//                   <p className={styles.itemMessage}>{chat.message}</p>
//                   {chat.unread > 0 && (
//                     <span className={styles.unreadBadge}>{chat.unread}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.section}>
//         <h2 className={styles.sectionTitle}>Groups</h2>
//         <div className={styles.list}>
//           {groups.map((group) => (
//             <div key={group.id} className={styles.listItem}>
//               <div className={styles.itemAvatar}>
//                 <Image src={img} alt={group.name} />
//               </div>
//               <div className={styles.itemContent}>
//                 <div className={styles.itemHeader}>
//                   <span className={styles.itemName}>{group.name}</span>
//                   <span className={styles.itemTime}>{group.time}</span>
//                 </div>
//                 <div className={styles.itemFooter}>
//                   <p className={styles.itemMessage}>{group.message}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatSidebar;

import React from "react";
import styles from "./chatSidebar.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FaAt } from "react-icons/fa";

const ChatSidebar = ({ user }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatar}>
        <Image className={styles.avaCircle} src={img} alt="" />
      </div>
      <h3 className={styles.name}>{user.name}</h3>
      <div className={styles.info}>
        <div className={styles.ic_flex}>
          <FiPhone className={styles.ic_icon} />
          <div>
            <strong>Phone</strong>
            <div className={styles.muted}>{user.phone}</div>
          </div>
        </div>

        <div className={styles.ic_flex}>
          <FaAt className={styles.ic_icon} />
          <strong>Username</strong>
          <div className={styles.muted}>savannah</div>
        </div>
        <div style={{ marginTop: 12 }}>
          <strong>Status</strong>
          <div className={styles.muted}>{user.role}</div>
        </div>
      </div>

      <div className={styles.recentAvatars}>
        {/* small row of avatars to match image design */}
        <div className={styles.smallRow}>
          <div className={styles.small}>SN</div>
          <div className={styles.small}>JW</div>
          <div className={styles.small}>JD</div>
          <div className={styles.small}>AK</div>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
