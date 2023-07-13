import { useState, useEffect } from "react"
import Alerta from './Alerta'
import usePacientes from "../hooks/usePacientes"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)

        }

    }, [paciente])


    const handleSubmit = e => {
        e.preventDefault()

        // Validar el formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }

        setAlerta({})
        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id })
        setAlerta({
            msg: 'Guardado correctamente'
        })
        setNombre('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setPropietario('')
        setId('')
    }

    const { msg } = alerta
    return (
        <>
             <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
               Añade tus pacientes y
                <span className="text-indigo-600 font-bold"> Adminístralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
            >
                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold"
                        htmlFor="nombre"
                    >Nombre Mascota</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-e-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold"
                        htmlFor="propietario"
                    >Nombre Propietario/a</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre Propietario/a"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-e-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Escribe tu email"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-e-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold"
                        htmlFor="fecha"
                    >Fecha Alta</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-e-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold"
                        htmlFor="sintomas"
                    >Síntomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-e-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    type="submit"
                    value={ id ? 'Guardar Cambios' : "Agregar Paciente"}
                />

            </form>
            {msg && <Alerta alerta={alerta} />}

        </>
    )
}

export default Formulario