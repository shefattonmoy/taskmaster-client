import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useAddTaskMutation } from '../../redux/features/tasks/tasksAPI';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const [addTask, {data, error}] = useAddTaskMutation();

  console.log(data);
  console.log(error);

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    addTask({...data, status: "Pending"});
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="MBSTU CSE">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register('assignedTo')}
          >
            <option value="Nazmus Shakib">Nazmus Shakib</option>
            <option value="Nazmul Haq">Nazmul Haq</option>
            <option value="Akash Ghosh">Akash Ghosh</option>
            <option value="Hasibul Islam">Hasibul Islam</option>
            <option value="Jahid Hasan Raju">Jahid Hasan Raju</option>
            <option value="Shefat Tonmoy">Shefat Tonmoy</option>
            <option value="Tanvir Rahman Rafi">Tanvir Rahman Rafi</option>
            <option value="Rabbiul Hasan Tanvi">Rabbiul Hasan Tanvi</option>
            <option value="Rubel Hassan">Rubel Hassan</option>
            <option value="Mostofa Meem">Mostofa Meem</option>
            <option value="Ruhan Sabab">Ruhan Sabab</option>
            <option value="Rifat Farazi">Rifat Farazi</option>
            <option value="Abid Hassan">Abid Hassan</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register('priority')}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger "
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ">
            submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
