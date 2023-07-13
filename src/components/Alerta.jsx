
const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-800' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-bl text-center text-white uppercase text-sm p-4 rounded-xl mb-10`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta;