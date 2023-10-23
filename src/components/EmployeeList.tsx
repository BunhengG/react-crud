import { useState } from "react";
import ActionButton from "./ActionButton";
import { Employee } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";


type Props = {
    list: Employee[];
    onDeleteHnd: (data: Employee) => void;
    onEdit: (data: Employee) => void;
}
const EmployeeList = (props: Props) => {

    const { list, onDeleteHnd, onEdit } = props;
    //* Open modal
    const [shadowModal, setShowModal] = useState(false);
    const [dataToView, setDataToView] = useState(null as Employee | null);

    const viewEmployee = (data: Employee) => {
        setDataToView(data);
        setShowModal(true);
    }
    const onCloseModal = () => setShowModal(false);


    return (
        <div>
            <div className="container bg-white shadow rounded p-3">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((employee) => {
                            // console.log(employee);
                            return (
                                <tr key={employee.id}>
                                    <th scope="row">1</th>
                                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <div>
                                            <ActionButton text="View" className="btn-primary ms-2" onClick={() => viewEmployee(employee)} />
                                            <ActionButton text="Edit" className="btn-success ms-2" onClick={() => onEdit(employee)}/>
                                            <ActionButton text="Delete" className="btn-danger ms-2" onClick={() => onDeleteHnd(employee)} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {shadowModal && dataToView !== null && <EmployeeModal onClose={onCloseModal} data={dataToView} />}
        </div>
    )
}

export default EmployeeList;