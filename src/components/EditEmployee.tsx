import { useState } from "react";
import { Employee } from "./Employee.type"


type Props = {
    data: Employee;
    onBackFunctionHnd: () => void;
    onUpdateClickHnd: (data: Employee) => void;
}

const EditEmployee = (props: Props) => {

    const { data, onBackFunctionHnd, onUpdateClickHnd } = props;

    const [firstname, setFirstName] = useState(data.firstName);
    const [lastname, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

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

    const onSubmitClickHnd = (e: any) => {
        e.preventDefault();
        const updatingData: Employee = {

            // ! remember this to not update id
            id: data.id,
            firstName: firstname,
            lastName: lastname,
            email: email
        }
        onUpdateClickHnd(updatingData);
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
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </>
    )
}

export default EditEmployee