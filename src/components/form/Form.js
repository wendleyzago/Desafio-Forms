import { CopyTwoTone, DeleteTwoTone,  PlusSquareTwoTone} from '@ant-design/icons'
import "../steps/user-registration/UserRegistration.scss"



const Form = ({icon, createNewForm, id, forms, setForms, setMainCurse, mainCurse}) => {
 

    const copyCurrentCurse = () => {
        const currentCurse = forms[0].curso

        forms.map((form) => {
            if(form.curso == ""){
                form.curso = currentCurse
            }
            setMainCurse(currentCurse)
        })
    }
 

    const deleteForm = () => {
        setForms((prevState) => [...prevState.filter((form) => form.id != id)])
    }
    

   return (
            <div id="data-component">
               <form className="datas">
                    <div>
                        <span className="hide">id</span>
                        <p>{id}</p>
                    </div>
    
                    <div >
                        <span>Nome</span>
                        <input type="text" onChange={(e) => forms[id - 1].name = e.target.value}/>
                    </div>
    
                    <div> 
                        <span>Cpf</span>
                        <input type="text" onChange={(e) => forms[id - 1].cpf = e.target.value}/>
                    </div>
    
                    <div>
                        <span>E-mail</span>
                        <input type="text" onChange={(e) => forms[id - 1].email = e.target.value} />
                    </div>
    
                    <div>
                        <span>Curso</span>
                        <input type="text" onChange={(e) => forms[id - 1].curso = e.target.value} defaultValue={mainCurse}/>
                    </div>
    
                    <div className="actions">
                        <span className="hide">actions</span>
                            {icon == 0 ? (
                            <div className="actions-svg">
                                <CopyTwoTone onClick={copyCurrentCurse}/>
                                <PlusSquareTwoTone onClick={createNewForm}/>
                            </div>
                            ) : (
                            <div className="actions-svg">
                                <DeleteTwoTone onClick={deleteForm}/>
                            </div>
                            )}
                    </div>
               </form>
            </div>
      )
    }

export default Form