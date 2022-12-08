
function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const { nombre, propietario, telefono, ingreso, sintomas, id } = paciente;

    function handleEliminar(){
        const respuesta = confirm("¿Deseas eliminar este paciente?");

        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    
    return (
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-lg mb-5">
            <p className="font-bold mb-3 text-gray-700 uppercase ">
                Nombre: {" "} <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">
                Propietario: {" "} <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">
                Teléfono: {" "} <span className="font-normal normal-case">{telefono}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">
                Ingreso: {" "} <span className="font-normal normal-case">{ingreso}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">
                Sintomas: {" "} <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-5">
                <button 
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
                    type="button" 
                    onClick={ () => setPaciente(paciente)}>
                    Editar
                </button>
                <button 
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button"
                    onClick={handleEliminar}
                    >Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente