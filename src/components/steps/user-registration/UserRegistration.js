import "./UserRegistration.scss"
import Form from "../../form/Form"



const CourseData = ({forms, createNewForm, setForms, setMainCurse, mainCurse}) => {

  return (
    <div className="main-component">
        <div className="header-component">
            <h2>Dados do usuário</h2>
        </div>
        {forms.map((form) => (
          <div key={form.id}>
            {form.icon == 0 ? (
            <div key={form.id}>
              <Form icon={0} 
                createNewForm={createNewForm} 
                id={form.id} 
                setForms={setForms} 
                forms={forms} 
                setMainCurse={setMainCurse}/>
            </div>
            ) : (
            <div key={form.id}>
              <Form 
                icon={1} 
                id={form.id} 
                setForms={setForms} 
                forms={forms} 
                mainCurse={mainCurse}/>
            </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default CourseData