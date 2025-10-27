// "use client";

// import React, { useState } from "react";
// import styles from "./chat.module.css";
// import ChatSidebar from "@/components/Coach/Chat/ChatSidebar/ChatSidebar";
// import ChatWindow from "@/components/Coach/Chat/ChatWindow/ChatWindow";
// import RightList from "@/components/Coach/Chat/RightList/RightList";

// const users = [
//   {
//     id: 1,
//     name: "Savannah Nguyen",
//     phone: "+2564 8539485",
//     role: "Product designer",
//     initials: "SN",
//   },
//   { id: 2, name: "Jenny Wilson", initials: "JW" },
//   { id: 3, name: "John Doe", initials: "JD" },
//   { id: 4, name: "Alex Kim", initials: "AK" },
//   { id: 5, name: "Maya Roy", initials: "MR" },
// ];

// const chats = [
//   {
//     id: 2,
//     messages: [
//       {
//         id: 1,
//         from: "other",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         date: "2023-09-08",
//       },
//       {
//         id: 2,
//         from: "me",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         date: "2023-09-08",
//         reactions: [
//           { emoji: "❤️", count: 2 },
//           { emoji: "😂", count: 1 },
//         ],
//       },
//       {
//         id: 3,
//         from: "other",
//         text: "Aliquam quis venenatis magna.",
//         date: "2023-09-09",
//       },
//       {
//         id: 4,
//         from: "me",
//         text: "Sure — I'll check and send update.",
//         date: "2023-09-09",
//         reactions: [
//           { emoji: "❤️", count: 2 },
//           { emoji: "😂", count: 1 },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     messages: [
//       { id: 1, from: "other", text: "Hi! Want to start a new project?" },
//     ],
//   },
// ];

// const StudentChatPage = () => {
//   const [activeUserId, setActiveUserId] = useState(2);
//   const [allChats, setAllChats] = useState(chats);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showRightList, setShowRightList] = useState(false);
//   const [showChatWindow, setShowChatWindow] = useState(false); // For mobile: controls chat window visibility

//   const activeUser = users.find((u) => u.id === activeUserId) || users[0];

//   const handleSend = (text) => {
//     if (!text.trim()) return;
//     setAllChats((prev) => {
//       const copy = [...prev];
//       const idx = copy.findIndex((c) => c.id === activeUserId);
//       const newMsg = {
//         id: Date.now(),
//         from: "me",
//         text,
//         date: new Date().toISOString().slice(0, 10),
//       };
//       if (idx === -1) {
//         copy.push({ id: activeUserId, messages: [newMsg] });
//       } else {
//         copy[idx].messages.push(newMsg);
//       }
//       return copy;
//     });
//   };

//   const handleCloseSidebars = () => {
//     setShowSidebar(false);
//     setShowRightList(false);
//   };

//   const handleShowSidebar = () => {
//     console.log("Opening sidebar", showSidebar);
//     setShowSidebar(true);
//   };

//   const handleShowRightList = () => {
//     console.log("Opening right list", showRightList);
//     setShowRightList(true);
//   };

//   // Handle chat selection (mobile view)
//   const handleChatSelect = (userId) => {
//     setActiveUserId(userId);
//     setShowChatWindow(true); // Show chat window on mobile
//   };

//   // Handle back from chat window to chat list (mobile view)
//   const handleBackToChatList = () => {
//     setShowChatWindow(false);
//   };

//   return (
//     <div className={styles.pageWrap}>
//       {/* Mobile Navigation */}
//       <div className={styles.mobileNav}>
//         <button className={styles.navBtn} onClick={handleShowSidebar}>
//           ☰
//         </button>
//         <div className={styles.brand}>Chat</div>
//         <button className={styles.navBtn} onClick={handleShowRightList}>
//           👥
//         </button>
//       </div>

//       {/* Overlay */}
//       {(showSidebar || showRightList) && (
//         <div className={styles.overlay} onClick={handleCloseSidebars} />
//       )}

//       <div className={styles.container}>
//         <div
//           className={`${styles.sidebarWrap} ${
//             showSidebar ? styles.showSidebar : ""
//           }`}
//         >
//           <ChatSidebar user={users[0]} />
//         </div>

//         <ChatWindow
//           user={activeUser}
//           messages={
//             (allChats.find((c) => c.id === activeUserId) || { messages: [] })
//               .messages
//           }
//           onSend={handleSend}
//           onBack={handleBackToChatList}
//           className={showChatWindow ? `${styles.showOnMobile} ${styles.showChatWindow}` : styles.hideOnMobile}
//         />

//         <div
//           className={`${styles.rightListWrap} ${
//             showRightList ? styles.showRightList : ""
//           } ${styles.iC_right_sidebar} ${showChatWindow ? styles.hideOnMobile : styles.showOnMobile}`}
//         >
//           <RightList
//             users={users}
//             activeUserId={activeUserId}
//             setActiveUserId={handleChatSelect}
//             onShowSidebar={handleShowSidebar}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentChatPage;

// StudentChatPage.jsx (Modified)

"use client";

import React, { useState } from "react";
import styles from "./chat.module.css";
import ChatSidebar from "@/components/Coach/Chat/ChatSidebar/ChatSidebar";
import ChatWindow from "@/components/Coach/Chat/ChatWindow/ChatWindow";
import RightList from "@/components/Coach/Chat/RightList/RightList";
import { HiMenuAlt2 } from "react-icons/hi";

const users = [
  // ... (users array remains the same)
  {
    id: 1,
    name: "Savannah Nguyen",
    phone: "+2564 8539485",
    role: "Product designer",
    initials: "SN",
  },
  { id: 2, name: "Jenny Wilson", initials: "JW" },
  { id: 3, name: "John Doe", initials: "JD" },
  { id: 4, name: "Alex Kim", initials: "AK" },
  { id: 5, name: "Maya Roy", initials: "MR" },
];

const chats = [
  // ... (chats array remains the same)
  {
    id: 2,
    messages: [
      {
        id: 1,
        from: "other",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2023-09-08",
      },
      {
        id: 2,
        from: "me",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2023-09-08",
        reactions: [
          { emoji: "❤️", count: 2 },
          { emoji: "😂", count: 1 },
        ],
      },
      {
        id: 3,
        from: "other",
        text: "Aliquam quis venenatis magna.",
        date: "2023-09-09",
      },
      {
        id: 4,
        from: "me",
        text: "Sure — I'll check and send update.",
        date: "2023-09-09",
        reactions: [
          { emoji: "❤️", count: 2 },
          { emoji: "😂", count: 1 },
        ],
      },
    ],
  },
  {
    id: 3,
    messages: [
      { id: 1, from: "other", text: "Hi! Want to start a new project?" },
    ],
  },
];

const StudentChatPage = () => {
  const [activeUserId, setActiveUserId] = useState(2);
  const [allChats, setAllChats] = useState(chats);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showRightList, setShowRightList] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);

  const activeUser = users.find((u) => u.id === activeUserId) || users[0];

  const handleSend = (text) => {
    if (!text.trim()) return;
    setAllChats((prev) => {
      const copy = [...prev];
      const idx = copy.findIndex((c) => c.id === activeUserId);
      const newMsg = {
        id: Date.now(),
        from: "me",
        text,
        date: new Date().toISOString().slice(0, 10),
      };
      if (idx === -1) {
        copy.push({ id: activeUserId, messages: [newMsg] });
      } else {
        copy[idx].messages.push(newMsg);
      }
      return copy;
    });
  };

  const handleCloseSidebars = () => {
    setShowSidebar(false);
    setShowRightList(false);
  };

  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  const handleShowRightList = () => {
    setShowRightList(true);
  };

  const handleChatSelect = (userId) => {
    setActiveUserId(userId);
    setShowChatWindow(true);
  };

  const handleBackToChatList = () => {
    setShowChatWindow(false);
  };

  return (
    <div className={styles.pageWrap}>
      <button
        className={styles.sidebarToggleBtn}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <HiMenuAlt2 />
      </button>

      <div className={styles.container}>
        {/* Sidebar */}
        <div
          className={`${styles.sidebarWrap} ${
            showSidebar ? styles.showSidebar : ""
          }`}
        >
          <ChatSidebar user={users[0]} />
        </div>

        {/* Chat Window */}
        <ChatWindow
          user={activeUser}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          messages={
            (allChats.find((c) => c.id === activeUserId) || { messages: [] })
              .messages
          }
          onSend={handleSend}
          onBack={handleBackToChatList}
          className={
            showChatWindow ? styles.showChatWindowMobile : styles.hideOnMobile
          }
        />

        {/* Right Chat List */}
        <div
          className={`${styles.rightListWrap} ${styles.iC_right_sidebar} ${
            showChatWindow ? styles.hideOnMobile : styles.showChatListMobile
          }`}
        >
          <RightList
            users={users}
            activeUserId={activeUserId}
            setActiveUserId={handleChatSelect}
            onShowSidebar={handleShowSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentChatPage;
