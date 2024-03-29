import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const Header = () => {

    const { cerrarSesion } = useAuth()
    return (
        <header className="py-10 bg-indigo-600">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 ">
                <h1 className="font-bold text-2xl text-center text-indigo-200">Administrador de Pacientes de<span className="text-white"> Veterinaria</span> </h1>

                <nav className='text-white items-center text-sm uppercase font-bold flex flex-col lg:flex-row lg:mt-0 gap-4 mt-5 justify-between '>
                    <Link to="/admin">Pacientes</Link>
                    <Link to="/admin/perfil">Perfil</Link>

                    <button
                        type="button"
                        className='text-white text-sm uppercase font-bold'
                        onClick={cerrarSesion}
                    >Cerrar Sesión</button>

                </nav>
            </div>

        </header>


    )
}

export default Header