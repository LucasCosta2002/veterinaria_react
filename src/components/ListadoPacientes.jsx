import Paciente from "./Paciente"


function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen">

			{pacientes && pacientes.length ? (
				<>
					<h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">Administra tus {" "} <span className="font-bold text-indigo-600">Pacientes y Turnos</span></p>

					{pacientes.map( paciente => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
				) : (
					<>
						<h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
						<p className="text-xl mt-5 mb-10 text-center">Empezá agregando pacientes y {" "} <span className="font-bold text-indigo-600">aparecerán en este lugar</span></p>
					</>
				)}
				
            
                
        </div>

    )
}

export default ListadoPacientes