
const Step2 = ({forms}) => {
  return (
    <div>
        <h1>Pessoas Cadastradas</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Email</th>
                    <th>Curso</th>
                </tr>
            </thead>
            <tbody>
                {forms.map((form) => (
                    <tr key={form.id}>
                        <td>{form.name}</td>
                        <td>{form.cpf}</td>
                        <td>{form.email}</td>
                        <td>{form.curso}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Step2