interface Props {
  label: string;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
}

export default function Checkbox(props: Props): JSX.Element {
  return (
    <div>
      <input
        id={props.label}
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.onCheck(e.currentTarget.checked)}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
}
