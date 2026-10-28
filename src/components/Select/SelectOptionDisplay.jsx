export function SelectOptionDisplay({ option, fallback, iconOnly = false }) {
    if (!option) return fallback ?? null;

    const { icon: Icon, color, label } = option;

    return (
        <span className="flex items-center gap-1 p-1">
            {Icon && <Icon size={18} stroke={1.5} color={color} />}
            {!iconOnly && <h5 className="text-sm">{label}</h5>}
        </span>
    );
}