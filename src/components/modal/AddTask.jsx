import { useContext, useState } from "react";
import { LineSeperator } from "../ui/LineSeparator";
import { Button } from "../ui/Button";
import { ModalContext } from "@/context/ModalContext";
import { TasksContext } from "@/context/TaskContext";
import { motion, AnimatePresence } from "motion/react";
import { IconX, IconSelect } from "@tabler/icons-react";
import FormField from "../ui/FormField";
import SelectOptions from "../Select/SelectOptions";
import { SelectOptionDisplay } from "../Select/SelectOptionDisplay";


export default function Modal() {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const { setTasks } = useContext(TasksContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [option, setOption] = useState(null);
    const [added, setAdded] = useState(false);

    const itemOption = {
        id: 0, 
        value: 'todo',       
        label: 'Select/Default To-do',       
        icon: IconSelect,         
        color: '#44403b'
    }

    const { icon: Icon, label, color} = itemOption;

    const fallback = itemOption
    ?   (<span className="flex items-center gap-1 p-1">
            {Icon && <Icon size={18} stroke={1.5} color={color} />}
            <h5 className="text-sm">{label}</h5>
        </span>)

    : null;

    

    async function handleSubmit(e) {
        e.preventDefault();

        if (added) return;

        setAdded(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setTasks((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    title,
                    description,
                    status: option?.value ?? 'todo',
                },
            ]);

            setTitle("");
            setDescription("");
            setOption(null);
            setIsModalOpen(false);
        } finally {
            setAdded(false);
        }
    }

    function handleClose(e) {
        e.preventDefault();
        setIsModalOpen(false);
    }

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleClose}
                    className="bg-black/50 fixed inset-0 grid place-items-center"
                >
                    <div className="w-full p-2 flex justify-center">
                        <motion.form
                            onSubmit={handleSubmit}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, y: 12, scale: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0 }}
                            transition={{
                                duration: 0.35,
                                ease: "easeInOut",
                            }}
                            className="bg-stone-800 rounded-md w-full max-w-md lg:max-w-xl relative"
                        >
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold p-2">
                                    Add Task
                                </h1>

                                <button
                                    className="mx-2 bg-red-500/20 p-1 rounded-sm text-red-400 hover:scale-105 transition-all duration-150 cursor-pointer hover:bg-red-500/50"
                                    type="button"
                                    onClick={handleClose}
                                    aria-label="Close modal"
                                >
                                    <IconX size={18} />
                                </button>
                            </div>

                            <LineSeperator />

                            <FormField
                                element="input"
                                label="Title:"
                                id="title"
                                onChange={setTitle}
                                value={title}
                                placeholder="Title"
                            />

                            <FormField
                                element="textarea"
                                label="Description"
                                id="description"
                                onChange={setDescription}
                                value={description}
                                placeholder="Description"
                            />

                            <div className="grid grid-cols-2 items-center justify-between gap-2 p-2">
                                <SelectOptions
                                    option={option}
                                    setOption={setOption}
                                >
                                    <SelectOptionDisplay option={option} fallback={fallback}/>
                                </SelectOptions>

                                <div className="grid gap-1 place-items-end md:flex md:items-center md:justify-end">
                                    <Button
                                        className="xs:w-20 md:w-fit"
                                        type="submit"
                                        variant="secondary"
                                        disabled={added}
                                    >
                                        {added ? "Adding..." : "Add"}
                                    </Button>
                                </div>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
