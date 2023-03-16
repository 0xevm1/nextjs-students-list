interface Props {
  label: string;
  index: number;
  isChecked: boolean;
  onCheck: (checked: boolean, index: number) => void;
}

export default function Checkbox(props: Props): JSX.Element {
  return (
    <div>
      <input
        id={props.label}
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.onCheck(e.currentTarget.checked, props.index)}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
}
