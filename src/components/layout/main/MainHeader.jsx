import { NavLink } from "react-router";
import { mainItems } from "@/constants/navItems";

export default function MainHeader(){
    return(
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-700/70 pb-3">
            <span className="text-lg font-semibold tracking-wide text-stone-100">
                WorkSpace
            </span>
            <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-1">
                {mainItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                                    isActive
                                        ? "bg-stone-700 text-stone-50"
                                        : "text-stone-400 hover:bg-stone-800 hover:text-stone-100"
                                }`
                            }
                        >
                            <Icon size={18} stroke={1.5} />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    )
}