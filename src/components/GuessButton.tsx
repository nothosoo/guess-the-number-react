//define onclick props
export interface GuessButtonProps {
  onClick: () => void;
  text: string;
  isDisabled: boolean;
}

function GuessButton(props: GuessButtonProps) {
  return (
    <button
      {...(props.isDisabled && { disabled: true })}
      onClick={props.onClick}
      className="guess-button"
    >
      {props.text}
    </button>
  );
}

export default GuessButton;
