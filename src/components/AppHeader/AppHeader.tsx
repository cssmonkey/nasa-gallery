import Link from "next/link";
import { FC } from "react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

const AppHeader: FC = () => (
    <div className="border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 drop-shadow">
        <div className="max-w-8xl mx-auto">
            <div className="px-8 py-4 flex justify-between">
                <Link
                    href="/"
                    className="inline-flex gap-3 items-center"
                    title="Homepage"
                >
                    <span className="text-4xl">🧑‍🚀</span>
                    <span className="text-indigo-700 dark:text-teal-300 font-bold text-3xl">
                        NASA Image Explorer
                    </span>
                </Link>
                <ThemeToggle />
            </div>
        </div>
    </div>
);
export default AppHeader;
