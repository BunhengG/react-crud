import { Employee } from "./Employee.type";

type Props = {
    onClose: () => void;
    data: Employee;
}

const EmployeeModal = (props: Props) => {
    const { onClose, data } = props;
    return (
        <>
            <div className="container mt-3">
                <h5 className="mt-5">View Employee</h5>
                <div className="d-flex justify-content-end mb-2">
                    <button className="btn-close" onClick={ onClose }></button>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">First Name: {data.firstName}</li>
                    <li className="list-group-item">Last Name: {data.lastName}</li>
                    <li className="list-group-item">Email: {data.email}</li>
                    
                </ul>
            </div>
        </>
    )
}

export default EmployeeModal