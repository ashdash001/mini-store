import toast from "react-hot-toast";
import Container from "./Container";
import { UserTypes } from "@/common/types/types";
import { useAppDispatch } from "@/store/store";
import { logoutUser } from "@/store/auth/authSlice";

type UserInfoProps = {
  user: UserTypes;
};

const UserInfo = ({ user }: UserInfoProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logged out successfully!");
  };

  return (
    <Container className="py-6 text-white">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-12 md:px-16 lg:px-20">
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-6 sm:gap-10">
          <img
            src={
              user?.avatar
                ? user.avatar
                : "https://static.vecteezy.com/system/resources/thumbnails/054/639/431/small/cat-wearing-a-yellow-jacket-and-blue-pants-is-walking-down-a-street-photo.jpg"
            }
            alt="User Avatar"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-gray-700 object-cover p-1"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Welcome back,{" "}
              <span className="underline underline-offset-2 decoration-[1px] font-medium">
                {user?.firstName} {user?.lastName}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-6 text-gray-300">
              Glad to have you back! Manage your profile and settings here.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center sm:justify-start gap-4 px-4">
          <button
            onClick={() =>
              toast.error("Edit profile option available to pro version!")
            }
            className="rounded-lg bg-white px-6 py-2 text-sm md:text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Edit Profile
          </button>
          <button
            onClick={() =>
              toast.error("Add Address option available to pro version!")
            }
            className="rounded-lg bg-white px-6 py-2 text-sm md:text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Add Address
          </button>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-6 py-2 text-sm md:text-base font-semibold text-white transition-all duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Logout
          </button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[48rem] w-[48rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#userInfoGradient)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="userInfoGradient">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </Container>
  );
};

export default UserInfo;
