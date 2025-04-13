import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAE5CF] text-[#5B0601] text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="mb-6">La página que estás buscando no existe o fue movida.</p>
      <Link
        to="/"
        className="bg-[#5B0601] text-white px-6 py-3 rounded-lg hover:bg-[#7f0900] transition-all"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
