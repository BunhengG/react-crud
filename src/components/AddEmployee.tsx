import { useState } from "react";
import { Employee } from "./Employee.type";

type Props = {
    onBackFunctionHnd: () => void;
    onSubmitHnd: (data: Employee) => void;
}

const AddEmployee = (props: Props) => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    //* function back to list page by getting from props
    const { onBackFunctionHnd, onSubmitHnd } = props;

    //* declare function for catch value from input
    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value);
    }
    const onEmailHnd = (e: any) => {
        setEmail(e.target.value);
    }

    //* Submit Data
    const onSubmitClickHnd = (e: any) => {
        e.preventDefault();
        const data: Employee = {
            id: new Date().toJSON().toString(),
            firstName: firstname,
            lastName: lastname,
            email: email
        }
        onSubmitHnd(data);
        onBackFunctionHnd();
    }

    return (
        <>
            <div className="container bg-light shadow rounded p-3">
                <form onSubmit={onSubmitClickHnd}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" value={firstname} onChange={onFirstNameChangeHnd} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" value={lastname} onChange={onLastNameChangeHnd} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={onEmailHnd} />
                    </div>
                    <button type="submit" className="btn btn-warning me-2" onClick={onBackFunctionHnd}>Back</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddEmployee;
