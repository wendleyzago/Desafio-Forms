import { Button, message, Steps } from "antd"
import { useState } from 'react'
import CourseData from "./components/steps/course-data/CourseData"
import Step2 from "./components/steps/step2/Step2"

import './App.css'
import 'antd/dist/antd.css'

const { Step } = Steps

const firstStep = 0

function App() {
  const [current, setCurrent] = useState(firstStep)
  const [id, setId] = useState(1)
  const [newId, setNewId] = useState(2)
  const [mainCurse, setMainCurse] = useState([])
  const [forms, setForms] = useState([
    {
      id: id,
      name: "",
      cpf: "",
      email: "",
      curso: "",
      icon: 0
    }
  ])


  const createNewForm = () => {
    
    setNewId(newId + 1)

    const newForm = {
      id: newId,
      name: "",
      cpf: "",
      email: "",
      curso: "",
      icon: 1
    }

    setForms((prevState) => [...prevState, newForm])
  }


  const steps = [
    {
      title: "Formato de envio",
      content: 
      <CourseData 
        forms={forms} 
        createNewForm={createNewForm}
        setForms={setForms}
        setMainCurse={setMainCurse}
        mainCurse={mainCurse}
      />
    },
    {
      title: "Formato escolhido",
      content: <Step2 forms={forms}/>
    },
    {
      title: "Confirmar dados",
      content: "Last Content"
    }
  ]

  const next = () => {
    setCurrent(current + 1)
    createNewForm()
  }

  const prev = () => {
    setCurrent(current - 1)
    window.location.reload(true)

  }

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title}/>
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action">

        {current > 0 && (
          <Button onClick={() => prev()}>
            Etapa Anterior
          </Button>
        )}  

        {current < steps.length -1 && (
          <Button type="primary" onClick={() => next()}>
            Próximo
          </Button>
        )}

        {current === steps.length -1 && (
          <Button type="primary" onClick={() => message.success("Processamento concluído!")}>
            Confirmar
          </Button>
        )}  
      </div>

    </div>
  )
}

export default App;
