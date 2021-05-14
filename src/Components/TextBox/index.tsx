import React from 'react';

import './styles.scss';

// TODO add autofocus and disabled params, max length

type TextBoxProps = {
    name: string;
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    type?: string;
};

export default function TextBox({ 
    name,
    label,
    value,
    setValue,
    type,
}: TextBoxProps) {
    return (
        <span className="text-box">
            <label htmlFor={name}>
                {label}
            </label>
            <input
                type={type || "text"}
                name={name}
                id={name}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            />
        </span>
    );
};
