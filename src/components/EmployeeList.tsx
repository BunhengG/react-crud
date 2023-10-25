import { useState } from "react";
import ActionButton from "./ActionButton";
import { Employee } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../css/styles.css";

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
    const [selectedIndex, setSelectIndex] = useState(-1);

    const viewEmployee = (data: Employee, index: number) => {
        setDataToView(data);
        setShowModal(true);
        setSelectIndex(index);
    }
    const onCloseModal = () => {
        setShowModal(false);
        setSelectIndex(-1);
    }

    const confirmDelete = (employee: Employee) => {
        const userConfirmed = window.confirm('Are you sure you want to delete this employee?');

        if (userConfirmed) {
            onDeleteHnd(employee);
        }
    };

    return (
        <div>
            <div className="container bg-white shadow rounded p-3">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="bg-primary text-white">№</th>
                            <th className="bg-primary text-white">Name</th>
                            <th className="bg-primary text-white">Email</th>
                            <th className="bg-primary text-white">Date</th>
                            <th className="bg-primary text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((employee, index) => {
                            // console.log(employee);
                            const employeeCount = index + 1;
                            return (
                                <tr className={selectedIndex === index ? "table-custom-active" : ""} key={employee.id} onClick={() => viewEmployee(employee, index)} style={{ cursor: 'pointer' }}>
                                    <th scope="row">{employeeCount}</th>
                                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.date}</td>
                                    <td>
                                        <div>
                                            {/* <ActionButton icon={faEye} text="" className="btn-primary btn-sm ms-2" onClick={() => viewEmployee(employee)} /> */}
                                            <ActionButton icon={faPenToSquare} text="" className="btn-success btn-sm ms-2" onClick={() => onEdit(employee)} />
                                            <ActionButton icon={faTrashCan} text="" className="btn-danger btn-sm ms-2" onClick={(e) => {
                                                e.stopPropagation();
                                                confirmDelete(employee);
                                            }} />
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