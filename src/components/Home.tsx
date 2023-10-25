import { useEffect, useState } from "react"
import { Employee, PageEnum } from "./Employee.type";
// import { Employee, dummyEmployeeList, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import ActionButton from "./ActionButton";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Home() {

  const titleStyle = "mb-5 mt-5 text-center text-uppercase";

  //***** /*

  //* declare state here to get data as dynamic array from employee.type.tsx 
  const [employeeList, setEmployeeList] = useState([] as Employee[]);

  //* here, we declare array as static that get data from employee.type.tsx to use
  //? const [employeeList, setEmployeeList] = useState(dummyEmployeeList as Employee[]);

  //****** */

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as Employee);

  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList")
    if (listInString) {
      _setEmployeeList(JSON.parse(listInString));
    }
  }, []);

  //* locate to Add Employee page
  const onAddEmployeeClickHandler = () => {
    setShownPage(PageEnum.add);

  };
  //* Back to list page as passing props
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  //* Store Record in Local
  const _setEmployeeList = (list: Employee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  }

  //* Create
  const addEmployee = (data: Employee) => {
    _setEmployeeList([...employeeList, data]);
  };

  //* Delete 
  const deleteEmployee = (data: Employee) => {
    //? To get index from []
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  }

  //* locate to Edit
  const onEditEmployee = (data: Employee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  }
  const updateData = (data: Employee) => {
    const filterData = employeeList.filter(x => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filterData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  }

  return (
    <>
      <article className='text-center text-white p-1 bg-primary'>
        <header>
          <h1>React Crud</h1>
        </header>
      </article>
      <main>
        <section>
          <div className='d-flex justify-content-center'>
            <h5 className={titleStyle}>Employee List</h5>
          </div>
          {shownPage === PageEnum.list &&
            (
              <>
                <div className="container d-flex justify-content-end">
                  <ActionButton text="Add New " className="btn-primary text-uppercase text-white fw-bold shadow-sm mb-3" onClick={onAddEmployeeClickHandler} icon={faCirclePlus} />
                </div>
                <EmployeeList
                  list={employeeList}
                  onDeleteHnd={deleteEmployee}
                  onEdit={onEditEmployee}
                />
              </>
            )}

          {/* show Create Page */}
          {shownPage === PageEnum.add && <AddEmployee onBackFunctionHnd={showListPage} onSubmitHnd={addEmployee} />}

          {/* show Create Page */}
          {shownPage == PageEnum.edit && <EditEmployee data={dataToEdit} onBackFunctionHnd={showListPage} onUpdateClickHnd={updateData} />}

        </section>
      </main>
    </>
  )
}

export default Home