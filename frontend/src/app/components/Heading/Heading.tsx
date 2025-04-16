import { HeadingType } from "./Types";

const Heading: React.FC<HeadingType> = ({ title }) => {
  return (
    <h1 className="relative text-[#333333] font-bold text-3xl mb-4
      border-l-8 border-[#5B7FBA] pl-3 before:absolute before:top-0 before:left-0">
      {title}
    </h1>
  )
}

export default Heading;
