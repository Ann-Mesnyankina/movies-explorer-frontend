export default function Input({
    label,
    id,
    name,
    type,
    placeholder,
    minLength,
    maxLength,
    value,
    onChange,
    autoComplete,
})
 {
    
    return (
        <>
            <label className="login__input-label">{label}</label>
            <input
                className="login__input"
                id={id}
                name={name}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                required
            />
        </>
    );
}