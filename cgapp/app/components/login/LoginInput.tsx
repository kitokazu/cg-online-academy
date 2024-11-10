import { ChangeEventHandler, InputHTMLAttributes } from "react"

type LoginInputType = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    input: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    className?: string;
  };

export function LoginInput({
    label, 
    input, 
    onChange, 
    className, 
    ...inputProps}: LoginInputType): JSX.Element {
    return (
        <div className = "p-3">
            <header>
                {label}
            </header>
            <input {...inputProps} value={input} onChange={onChange} 
            className = {`${className} border border-black`}
            required/>
        </div>
    )
}