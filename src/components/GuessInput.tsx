import React from "react";

export interface GuessInputProps {
  label: string;
  placeholder?: string;
  value?: number;
  onChange?: (el: React.ChangeEvent<HTMLInputElement>) => void;
}

function GuessInput(props: GuessInputProps) {
  return (
    <div className="input-group">
      <label htmlFor="guess-label">{props.label}</label>
      <input
        id="guess-label"
        type="number"
        className="guess-input"
        value={props.value?.toString()}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default React.memo(GuessInput);
