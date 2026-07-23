const InputField = ({
    label,
    type = "text",
    name,
    value,
    placeholder,
    onChange,
    error,
    icon: Icon,
}) => {
    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className="flex flex-row-reverse justify-end items-center gap-2 text-[#5A4F47] font-medium px-3"
            >
                {Icon && <Icon size={18} className="text-red-900" />}
                {label}
            </label>

            <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={` w-full text-right placeholder:text-right px-4 py-3 rounded-xl border outline-none transition-all
                    ${
                        error
                            ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-[#C9B49A] focus:border-red-900 focus:ring-2 focus:ring-red-900/20"
                    }
                `}
            />

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;
