import { Button } from "../ui/Button";

const on = 'outline-2 outline-offset-2 outline-stone-500';

export default function StatusToggle({ value, onChange }) {
  return (
    <div className="grid gap-2 md:flex md:gap-2 md:items-start">
      <Button variant="secondary" className={`${value ? on : ''} md:w-fit xs:w-23`}
        onClick={(e) => { e.preventDefault(); onChange(true); }}>Complete</Button>
      <Button variant="secondary" className={`${!value ? on : ''} md:w-fit xs:w-23`}
        onClick={(e) => { e.preventDefault(); onChange(false); }}>Incomplete</Button>
    </div>
  );
}