import ThemeToggler from "@/components/ThemeToggler";
import { Notify } from "@/components/Toast";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex flex-col">
        <div className="flex justify-between items-center p-2 pt-3 md:p-3">
          <div>
            <span>
              <h1 className="text-2xl font-bold dark:text-slate-300 text-slate-500">
                keypepper
              </h1>
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span>
              <ThemeToggler className="text-2xl dark:text-xl" />
            </span>
            <span>
              <button
                type="button"
                className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200"
                onClick={Notify}
              >
                Signin
              </button>
            </span>
            <span>
              <button
                type="button"
                className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                onClick={Notify}
              >
                Signup
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
