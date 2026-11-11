import { useContext, useState } from "react";
import { LineSeperator } from "../ui/LineSeparator";
import { Button } from "../ui/Button";
import { ModalContext } from "@/context/ModalContext";
import { TasksContext } from "@/context/TasksContext";
import { motion, AnimatePresence } from "motion/react";
import { IconX } from "@tabler/icons-react";
import FormField from "../ui/FormField";
import SelectOptions from "../Select/SelectOptions";
import { SelectOptionDisplay } from "../Select/SelectOptionDisplay";
import { SelectItems } from "@/constants/SelectOptions";


export default function Modal() {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const { editingTask } = useContext(TasksContext);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <TaskForm
                    key={editingTask?.id ?? "new-task"}
                    editingTask={editingTask}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </AnimatePresence>
    );
}

function TaskForm({ editingTask, onClose }) {
    const { setTasks, setEditingTask } = useContext(TasksContext);
    const [title, setTitle] = useState(() => editingTask?.title ?? "");
    const [description, setDescription] = useState(() => editingTask?.description ?? "");
    const [option, setOption] = useState(
        editingTask
            ? SelectItems.find((item) => item.value === editingTask.status) ?? null
            : null
    );
    const [saving, setSaving] = useState(false);
    const [titleError, setTitleError] = useState("");

    const itemOption = SelectItems.find((item) => item.value === "todo");
    const { icon: Icon, label, color} = itemOption;

    const fallback = (
        <span className="flex items-center gap-1 p-1">
            {Icon && <Icon size={18} stroke={1.5} color={color} />}
            <h5 className="text-sm">{label}</h5>
        </span>
    );

    function resetForm() {
        setEditingTask(null);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (saving) return;

        const taskTitle = title.trim();
        if (!taskTitle) {
            setTitleError("Enter a task title.");
            e.currentTarget.querySelector("#title")?.focus();
            return;
        }

        setSaving(true);
        try {
            if (editingTask) {
                setTasks((currentTasks) => currentTasks.map((task) =>
                    task.id === editingTask.id
                        ? {
                            ...task,
                            title: taskTitle,
                            description: description.trim(),
                            status: option?.value ?? task.status,
                        }
                        : task
                ));
            } else {
                setTasks((currentTasks) => [
                    ...currentTasks,
                    {
                        id: crypto.randomUUID(),
                        title: taskTitle,
                        description: description.trim(),
                        status: option?.value ?? "todo",
                    },
                ]);
            }

            resetForm();
            onClose();
        } finally {
            setSaving(false);
        }
    }

    function handleClose(e) {
        e?.preventDefault();
        resetForm();
        onClose();
    }

    return (
        <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="bg-black/50 fixed inset-0 z-40 grid place-items-center"
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
                            {editingTask ? "Edit task" : "Add task"}
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
                        onChange={(value) => {
                            setTitle(value);
                            setTitleError("");
                        }}
                        value={title}
                        placeholder="Title"
                        ariaDescribedBy={titleError ? "title-error" : undefined}
                    />
                    {titleError && (
                        <p id="title-error" role="alert" className="px-2 text-sm text-red-300">
                            {titleError}
                        </p>
                    )}

                    <FormField
                        element="textarea"
                        label="Description"
                        id="description"
                        onChange={setDescription}
                        value={description}
                        placeholder="Description"
                        required={false}
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
                                disabled={saving}
                            >
                                {saving ? "Saving..." : editingTask ? "Save changes" : "Add task"}
                            </Button>
                        </div>
                    </div>
                </motion.form>
            </div>
        </motion.div>
    );
}
