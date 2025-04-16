import Navigation from "./Navigation/Navigation";

const SideMenu = () => {
  return (
    <div className="w-[240px] bg-[rgba(68,193,170,1)] position-fixed top-0 left-0 h-screen py-6">
      <div className="flex flex-col items-center">
        <img
          src="/images/common/logo.svg"
          alt="Todaily"
        />
      </div>
      <div className="flex flex-col mt-8">
        <Navigation />
      </div>
    </div>
  )
}

export default SideMenu;
