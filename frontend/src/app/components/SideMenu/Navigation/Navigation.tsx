import { MdDashboard } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { NavigationItemType } from "./NavigationItem/Types";
import NavigationItem from "./NavigationItem/NavigationItem";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const Navigation = () => {
  const navigationItems: NavigationItemType[] = [
    {
      id: 1,
      name: "ダッシュボード",
      icon: <MdDashboard size={24} className="text-white" />,
      href: "/dashboard",
    },
    {
      id: 2,
      name: "スケジュール",
      icon: <RiCalendarScheduleFill size={24} className="text-white" />,
      href: "/schedules",
    },
    {
      id: 3,
      name: "オプション",
      icon: <IoSettingsSharp size={24} className="text-white" />,
      href: "/settings",
    },
    {
      id: 4,
      name: "ログアウト",
      icon: <AiOutlineLogout size={24} className="text-white" />,
      href: "/logout",
    }
  ];

  return (
    <div>
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.id}
          id={item.id}
          name={item.name}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </div>
  )
}

export default Navigation;
