import css from "./UserForm.module.css";
import { useId } from "react";

export default function UserForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      name: event.target.elements.username.value,
      role: event.target.elements.role.value,
    });
    event.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={fieldId}>Username:</label>
        <input type="text" name="username" id={fieldId} />
      </div>

      <div className={css.group}>
        <label>Role:</label>
        <select name="role">
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
