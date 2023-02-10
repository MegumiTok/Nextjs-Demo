import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useAppSelector } from "@/redux/store";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    // name: event.target.value,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useAppSelector(
    (state) => state.employeeManagement.client.formId
  );
  return (
    <div className="container mx-auto py-5">
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AddUserForm({ formData, setFormData })}
    </div>
  );
}
