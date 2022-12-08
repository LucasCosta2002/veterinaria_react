import { useState, useEffect } from 'react'
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [telefono, setTelefono] = useState('');
	const [ingreso, setIngreso] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false)

	useEffect(() => { //escucha por los cambios que suceden en el state
		if(Object.keys(paciente).length > 0){//comprobar si un arreglo está vacio
			setNombre(paciente.nombre) //modificar eñ state para inyectarlo en el form
			setPropietario(paciente.propietario)
			setTelefono(paciente.telefono)
			setIngreso(paciente.ingreso)
			setSintomas(paciente.sintomas)
		}
	}, [paciente])
	
	function generarId() {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36)
		return random + fecha
	}

	function handleSubmit(e) {
		e.preventDefault()
		
		if([nombre, propietario, telefono, ingreso, sintomas].includes('')){
			setError(true) 
			return;
		}

		setError(false)
		
		const objetoPaciente ={
			nombre,
			propietario, 
			telefono, 
			ingreso, 
			sintomas
		}

		if (paciente.id) {// editando el registro
			objetoPaciente.id = paciente.id

			const pacientesActualizados = pacientes.map((pacienteState)=> pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

			setPacientes(pacientesActualizados)
			setPaciente({})
		}else{
			// nuevo registro
			objetoPaciente.id = generarId()
			setPacientes([...pacientes, objetoPaciente])//generar un nuevo arreglo sin modificar el arreglo original
		}
		
		// reiniciar formlario
		setNombre('')
		setPropietario('')
		setTelefono('')
		setIngreso('')
		setSintomas('')
	}

  return (

    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-xl mt-5 text-center mb-10">Añade Mascotas y {" "}<span className="text-indigo-600 font-bold ">Administralas</span>
		</p>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mx-5">
			{error && <Error><p>Todos los campos son obligatorios</p></Error> } 
			{/* ventaja de children es que se puede pasar mas contenido html */}
			<div className="mb-5">
				<label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota </label>
				<input 
					id="mascota"
					type="text" 
					placeholder="Nombre de la mascota"
					className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					value={nombre}
					onChange={ e => setNombre(e.target.value)}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
				<input 
					id="propietario"
					type="text" 
					placeholder="Nombre del propietario"
					className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					value={propietario}
					onChange={ e => setPropietario(e.target.value)}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">Teléfono</label>
				<input 
					id="telefono"
					type="number" 
					placeholder="Teléfono del propietario"
					className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					value={telefono}
					onChange={ e => setTelefono(e.target.value)}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="ingreso" className="block text-gray-700 uppercase font-bold">Ingreso</label>
				<input 
					id="ingreso"
					type="date" 
					className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					value={ingreso}
					onChange={ e => setIngreso(e.target.value)}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
				<textarea 
					id="sintomas"
					className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					placeholder="Descripción de los sintomas"
					value={sintomas}
					onChange={ e => setSintomas(e.target.value)}
				/>
			</div>

			<input 
				type="submit"
				className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors mg-10"
				value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
			/>
        </form>

    </div>
  )
}

export default Formulario