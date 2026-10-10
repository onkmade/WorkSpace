import {twMerge} from 'tailwind-merge';

const styles = {
    primary: 'bg-stone-800 text-stone-300 hover:text-stone-50 w-fit',
    secondary: 'bg-stone-600 text-stone-300 hover:text-stone-50 w-fit'
}

const sizes = {
  sm: 'px-[0.75em] py-[0.375em] rounded-[0.5em] text-sm',   // 14px / 5.25px / 7px radius (font 14px)
  md: 'px-[0.75em] py-[0.35em] rounded-[0.5em] text-base',   // 16px / 8px    / 8px radius (font 16px)
  lg: 'px-[1em] py-[0.625em] rounded-[0.75em] text-lg',  // 18px / 11.25px / 13.5px radius (font 18px)
};


export default function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                styles[variant],
                sizes[size],
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100',
                className
            )}
        >
            {children}
        </button>
    );
}