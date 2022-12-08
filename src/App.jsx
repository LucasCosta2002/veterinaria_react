import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

	const inicial = JSON.parse(localStorage.getItem('pacientes')) ?? []; // comprobar si hay algun paciente registrado en LS para mostrarlo
	
	const [pacientes, setPacientes] = useState(inicial); 
	const [paciente, setPaciente] = useState({}); // para completar el formulario al editar

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes])

	function eliminarPaciente(id){
		const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
		setPacientes(pacientesActualizados);
	}

	return (
		<div className="container mx-auto mt-20">
			<Header />

			<div className="mt-12 md:flex">
				<Formulario 
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>

				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
			
		</div>
	)
}

export default App
