import { Home2, Book, Bubble, User, ClipboardText, Wallet, Award, Diagram, Setting2, LogoutCurve } from 'iconsax-react';


export const sidebarLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: <Home2 size="18" className='stroke-current' /> },
  { label: 'Programs', href: '/settings', icon: <Book size="18" className='stroke-current' /> },
  { label: 'Activities', href: '/profile', icon: <Bubble size="18" className='stroke-current' /> },
  { label: 'Users', href: '/users', icon: <User size="18" className='stroke-current' /> },
  { label: 'Forums', href: '/forums', icon: <ClipboardText size="18" className='stroke-current' /> },
  { label: 'Finances', href: '/finances', icon: <Wallet size="18" className='stroke-current' /> },
  { label: 'Rewards', href: '/rewards', icon: <Award size="18" className='stroke-current' /> },
  { label: 'Analytics', href: '/analytics', icon: <Diagram size="18" className='stroke-current' />, comingSoon: true },
  { label: 'Settings', href: '/settings', icon: <Setting2 size="18" className='stroke-current' /> },
  { label: 'Log out', href: '/logout', icon: <LogoutCurve size="18" className='stroke-current' /> }
  ];
  

  export const programsData = [
    {
      title: "Fundamentals of User interface & Experience",
      image: "/images/bgimg.jpg",
      icon: "/icons/settings.png",
      category: "Bootcamp",
      categoryColor: "#D4E0F3",
      categoryTextColor: "#0077FF",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      avatars: "/images/Participants Avatars.png",
    },
  ];


  export const hostedCardData = [
    {
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      bgImage: "/images/7cf42e0c90afc28e48671582f0632caeced80a89.jpg",
      tag: {
        text: "● Group Call",
        bgColor: "#D4F3D4",
        textColor: "#008000",
      },
      avatar: "/images/545b95afb389acae711550cdd00087f1a6a10cdf.png",
      hostedBy: "Self",
    },
    {
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      bgImage: "/images/7cf42e0c90afc28e48671582f0632caeced80a89.jpg",
      tag: {
        text: "● Group Call",
        bgColor: "#D4F3D4",
        textColor: "#008000",
      },
      avatar: "/images/545b95afb389acae711550cdd00087f1a6a10cdf.png",
      hostedBy: "Self",
    },
  ];

  export const events = [
    {
      image: "/images/7cf42e0c90afc28e48671582f0632caeced80a89.jpg",
      status: "Ongoing",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon. Jul 30, 2024",
      time: "9:00 - 11:00AM",
      groupImage: "/images/b11c58bc810aaca8b4cafdbfdd993d59ac2fc296.jpg",
      groupLabel: "Study Group",
      groupName: "UX Strategy Study group",
      mentorsImage: "/images/Participants Avatars.png",
    },
    {
      image: "/images/5d3e59068f45ff78683819f2fb52145e16778fa8.jpg",
      status: "Upcoming",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Wed. Aug 14, 2024",
      time: "2:00 - 4:00PM",
      groupImage: "/images/b11c58bc810aaca8b4cafdbfdd993d59ac2fc296.jpg",
      groupLabel: "Workshop",
      groupName: "DesignOps Community",
      mentorsImage: "/images/Participants Avatars.png",
    },
    {
      image: "/images/2ae59a5ace8b4e6cb98ad11acc1b904db4b7857e.jpg",
      status: "ongoing",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Wed. Aug 14, 2024",
      time: "2:00 - 4:00PM",
      groupImage: "/images/b11c58bc810aaca8b4cafdbfdd993d59ac2fc296.jpg",
      groupLabel: "Workshop",
      groupName: "DesignOps Community",
      mentorsImage: "/images/Participants Avatars.png",
    },
  ];

  export const students = [
    {
      name: 'Adeati Samuel',
      email: 'maxwellsmith@gmail.com',
      imageUrl: '/images/83bfba5db7333a4fa63872330c127d3db0692498.jpg',
    },
    {
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      imageUrl: '/images/07f054838a4e99808eed4d84c664f26266a95f18.png',
    },
    {
      name: 'Adeati Samuel',
      email: 'maxwellsmith@gmail.com',
      imageUrl: '/images/83bfba5db7333a4fa63872330c127d3db0692498.jpg',
    },
    {
      name: 'Maxwell Smith',
      email: 'maxwellsmith@gmail.com',
      imageUrl: '/images/07f054838a4e99808eed4d84c664f26266a95f18.png',
    },
  ];

  export const teamMembers = [
    {
      image: "/images/07f054838a4e99808eed4d84c664f26266a95f18.png",
      name: "Maxwell Smith",
      role: "Product Designer",
    },
    {
      image: "/images/83bfba5db7333a4fa63872330c127d3db0692498.jpg",
      name: "Adeati Samuel",
      role: "Product Designer",
    },
  ];

  export const notifications = [
    {
      image: "/images/d75e238e1f512d9f81138d9936762413f307be3c (1).jpg",
      title: "KYC Verification",
      description: "45 new persons just signed up on Mently.",
      time: "25 minutes ago",
    },
    {
      image: "/images/9006cc7db34bced14e394732261d8586a2b87464.png",
      title: "New User Sign Up!",
      description: "45 new persons just signed up on Mently.",
      time: "25 minutes Ago",
    },
    {
      image: "/images/83bfba5db7333a4fa63872330c127d3db0692498.jpg",
      title: "Withdrawal Request",
      description: "Mardian requested a withdrawal.",
      time: "25 minutes Ago",
    },
  ];
  