import { Button } from "../ui/Button";

const on = 'outline-2 outline-offset-2 outline-stone-300';

export default function StatusToggle({ value, onChange }) {
  return (
    <div className="space-x-2">
      <Button variant="secondary" className={value ? on : ''}
        onClick={(e) => { e.preventDefault(); onChange(true); }}>Complete</Button>
      <Button variant="secondary" className={!value ? on : ''}
        onClick={(e) => { e.preventDefault(); onChange(false); }}>Incomplete</Button>
    </div>
  );
}