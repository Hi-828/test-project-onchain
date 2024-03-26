import Image from "next/image";
import profileImg from "@/public/svgs/logo.svg";

const Logo = () => {
  return (
      <div className="flex items-center h-full">
        <a>
          <div
            style={{width: "152px", height: "42px" }}
            className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 md:ml-20"
          >
            <Image
              src={profileImg}
              alt="CodeBucks logo"
              className="w-full h-auto"
              sizes="20vw"
              priority
            />
          </div>
        </a>
      </div>

  );
};

export default Logo;
