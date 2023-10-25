import { Employee } from "./Employee.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


type Props = {
    onClose: () => void;
    data: Employee;
}

const EmployeeModal = (props: Props) => {
    const { onClose, data } = props;
    return (
        <>
            <div className="container mt-3">
                <div className="row mb-3">
                    <div className="col-6 d-flex justify-content-start align-items-center mt-5">
                        <h5 className="text-primary text-uppercase">View Employee</h5>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center mt-5">
                        <span className="text-danger fs-3" style={{ cursor: 'pointer' }} onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
                    </div>
                </div>
                <ul className="list-group shadow p-3">
                    <li className="list-group-item"><b>First Name: </b> {data.firstName}</li>
                    <li className="list-group-item"><b>Last Name: </b> {data.lastName}</li>
                    <li className="list-group-item"><b>Email: </b> {data.email}</li>
                    <li className="list-group-item"><b>Date: </b> {data.date}</li>
                </ul>
            </div>
        </>
    )
}

export default EmployeeModal