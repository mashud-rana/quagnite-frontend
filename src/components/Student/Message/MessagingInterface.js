import { BsArrowLeft, BsChevronRight } from "react-icons/bs";
import styles from "./messag.module.css";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import {
  BiBell,
  BiChevronRight,
  BiPhone,
  BiSend,
  BiUserPlus,
  BiVideo,
} from "react-icons/bi";
import { FiChevronRight, FiMoreHorizontal, FiSettings } from "react-icons/fi";
import { GiPaperClip } from "react-icons/gi";
import { PiNeedle } from "react-icons/pi";
import img from "@/assets/images/all/boy.png";
import img2 from "@/assets/images/all/webinar.png";
import Image from "next/image";

export default function MessagingInterface() {
  const conversations = [
    {
      id: 1,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet...",
      time: "04:45 pm",
      avatar: "/diverse-person-portrait.png",
      unread: 27,
      isOnline: true,
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      message: "Hi What new project?",
      time: "04:45 pm",
      avatar: "/diverse-group-conversation.png",
      unread: 0,
      isOnline: false,
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet, consectetur adipiscing",
      time: "04:45 pm",
      avatar: "/diverse-group-meeting.png",
      unread: 0,
      isOnline: true,
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet, consectetur adipiscing",
      time: "04:45 pm",
      avatar: "/diverse-group-meeting.png",
      unread: 0,
      isOnline: false,
    },
  ];

  const groupConversations = [
    {
      id: 1,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet...",
      time: "04:45 pm",
      avatar: "/diverse-group-brainstorming.png",
      unread: 27,
      isOnline: true,
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      message: "Hi What new project?",
      time: "04:45 pm",
      avatar: "/diverse-group-meeting.png",
      unread: 0,
      isOnline: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina.jpg",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Saturday 10:12 am",
      avatar: "/abstract-self-reflection.png",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Nick Banner",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      time: "Saturday 10:12 am",
      avatar: "/nick.jpg",
      isOwn: false,
    },
    {
      id: 4,
      sender: "Chris White",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      time: "Saturday 10:12 am",
      avatar: "/person-contemplating.png",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Donald Musk",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      time: "Saturday 10:12 am",
      avatar: "/donald.jpg",
      isOwn: false,
    },
    {
      id: 6,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina2.jpg",
      isOwn: false,
      isTyping: true,
    },
  ];

  const mediaItems = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      thumbnail: "/diverse-media-landscape.png" + (i + 1),
    }));

  const files = [
    {
      id: 1,
      name: "642 TB-DSHN-0001.pdf",
      size: "3.32MB",
      date: "12 Nov 2024",
    },
    {
      id: 2,
      name: "642 TB-DSHN-0001.pdf",
      size: "3.32MB",
      date: "12 Nov 2024",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <div className={styles.leftSidebar}>
        <div className={styles.header}>
          <BsArrowLeft className={styles.backIcon} />
          <h1 className={styles.title}>Messages</h1>
        </div>

        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>

        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.tabActive}`}>
            Inbox <span className={styles.badge}>02</span>
          </button>
          <button className={styles.tab}>
            Explore <span className={styles.badge}>10</span>
          </button>
        </div>

        <button className={styles.createGroupBtn}>CREATE A NEW GROUP</button>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Individual</h3>
          <div className={styles.conversationList}>
            {conversations.map((conv) => (
              <div key={conv.id} className={styles.conversation}>
                <div className={styles.avatarContainer}>
                  <Image
                    height={100}
                    width={100}
                    src={img}
                    alt={conv.name}
                    className={styles.avatar}
                  />
                  {conv.isOnline && <div className={styles.onlineIndicator} />}
                </div>
                <div className={styles.conversationContent}>
                  <div className={styles.conversationHeader}>
                    <span className={styles.conversationName}>{conv.name}</span>
                    <span className={styles.conversationTime}>{conv.time}</span>
                  </div>
                  <p className={styles.conversationMessage}>{conv.message}</p>
                </div>
                {conv.unread > 0 && (
                  <div className={styles.unreadBadge}>{conv.unread}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Groups</h3>
          <div className={styles.conversationList}>
            {groupConversations.map((conv) => (
              <div key={conv.id} className={styles.conversation}>
                <div className={styles.avatarContainer}>
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt={conv.name}
                    className={styles.avatar}
                  />
                  {conv.isOnline && <div className={styles.onlineIndicator} />}
                </div>
                <div className={styles.conversationContent}>
                  <div className={styles.conversationHeader}>
                    <span className={styles.conversationName}>{conv.name}</span>
                    <span className={styles.conversationTime}>{conv.time}</span>
                  </div>
                  <p className={styles.conversationMessage}>{conv.message}</p>
                </div>
                {conv.unread > 0 && (
                  <div className={styles.unreadBadge}>{conv.unread}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={styles.mainChat}>
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderLeft}>
            <Image
              height={100}
              width={100}
              src={img}
              alt="Coding Team"
              className={styles.chatAvatar}
            />
            <h2 className={styles.chatTitle}>Coding Team</h2>
          </div>
          <div className={styles.chatHeaderActions}>
            <button className={styles.actionBtn}>
              <BiPhone size={20} />
            </button>
            <button className={styles.actionBtn}>
              <BiVideo size={20} />
            </button>
            <button className={styles.actionBtn}>
              <FiMoreHorizontal size={20} />
            </button>
          </div>
        </div>

        <div className={styles.messagesContainer}>
          <div className={styles.dateLabel}>Today</div>

          {messages.map((message, index) => (
            <div key={message.id}>
              {index === 4 && <div className={styles.unreadLabel}>Unread</div>}
              <div
                className={`${styles.message} ${
                  message.isOwn ? styles.messageOwn : ""
                }`}
              >
                {!message.isOwn && (
                  <Image
                    height={100}
                    width={100}
                    src={img}
                    alt={message.sender}
                    className={styles.messageAvatar}
                  />
                )}
                <div className={styles.messageContent}>
                  {!message.isOwn && (
                    <div className={styles.messageHeader}>
                      <span className={styles.messageSender}>
                        {message.sender}
                      </span>
                      <span className={styles.messageTime}>{message.time}</span>
                    </div>
                  )}
                  <div
                    className={`${styles.messageBubble} ${
                      message.isOwn ? styles.messageBubbleOwn : ""
                    }`}
                  >
                    {message.message}
                    {message.isOwn && (
                      <div className={styles.messageReactions}>
                        <span>❤️</span>
                        <span>👍</span>
                        <span>😂</span>
                        <span>+3</span>
                      </div>
                    )}
                  </div>
                  {message.isTyping && (
                    <div className={styles.typingIndicator}>Typing...</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.messageInput}>
          <input
            type="text"
            placeholder="Type your message"
            className={styles.textInput}
          />
          <button className={styles.attachBtn}>
            <GiPaperClip size={20} />
          </button>
          <button className={styles.sendBtn}>
            <BiSend size={20} />
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={styles.rightSidebar}>
        <div className={styles.groupInfo}>
          <h3 className={styles.groupInfoTitle}>Group Information</h3>

          <div className={styles.groupProfile}>
            <Image
              height={100}
              width={100}
              src={img}
              alt="Coding Team"
              className={styles.groupAvatar}
            />
            <h4 className={styles.groupName}>Coding Team</h4>
          </div>

          <div className={styles.groupActions}>
            <button className={styles.groupActionBtn}>
              <BiBell size={16} />
              <span>Notification</span>
            </button>
            <button className={styles.groupActionBtn}>
              <BiUserPlus size={16} />
              <span>Add Member</span>
            </button>
            <button className={styles.groupActionBtn}>
              <FiSettings size={16} />
              <span>Settings</span>
            </button>
            <button className={styles.groupActionBtn}>
              <PiNeedle size={16} />
              <span>Pin Group</span>
            </button>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoHeader}>
              <span className={styles.infoTitle}>Members</span>
              <BiChevronRight size={16} />
            </div>
            <div className={styles.memberCount}>
              <span>👥 50 members</span>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoHeader}>
              <span className={styles.infoTitle}>Shared Media</span>
              <BsChevronRight size={16} />
            </div>
            <div className={styles.mediaGrid}>
              {mediaItems.map((item) => (
                <Image
                  key={item.id}
                  src={item.thumbnail || "/placeholder.svg"}
                  alt="Shared media"
                  className={styles.mediaThumbnail}
                />
              ))}
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoHeader}>
              <span className={styles.infoTitle}>Files</span>
              <FaChevronRight size={16} />
            </div>
            <div className={styles.filesList}>
              {files.map((file) => (
                <div key={file.id} className={styles.fileItem}>
                  <div className={styles.fileIcon}>📄</div>
                  <div className={styles.fileInfo}>
                    <div className={styles.fileName}>{file.name}</div>
                    <div className={styles.fileDetails}>{file.size}</div>
                  </div>
                  <div className={styles.fileDate}>{file.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoHeader}>
              <span className={styles.infoTitle}>Links</span>
              <FiChevronRight size={16} />
            </div>
            <div className={styles.linkItem}>
              <span className={styles.linkUrl}>www.quagnite.com</span>
              <span className={styles.linkDate}>12 Nov 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
