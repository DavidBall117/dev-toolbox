import React from 'react';

import './styles.scss';

// TODO refactor

// TODO add label and subtext for textarea
// TODO add character count below box in bottom right

type TextAreaProps = {
    name: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    rows: number;
    autoFocus?: boolean;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
};

export default function TextArea({ 
    name,
    value,
    setValue,
    rows,
    autoFocus,
    disabled,
    maxLength,
    placeholder
}: TextAreaProps) {
    return (
        <textarea
            className="text-area"
            name={name}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value)}
            rows={rows}
            autoFocus={autoFocus}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
        />
    );
};
