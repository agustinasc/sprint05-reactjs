import React from 'react'


/* const Home = () => {
  return (
    <div className="text-center px-6 py-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-[#6b4c3b] mb-6">PANIFICADORA Y CAFETERIA 
        <span className="text-[#a0522d]"> MATHIUS</span>
      </h1>
      <p 
        className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
      >
        🎉 Este julio cumplimos <strong>32 años</strong> llevando el verdadero sabor artesanal de nuestras manos a tu mesa.
        <br /><br />
        Si todavía no nos conociste, te esperamos en <strong>Ayacucho 909</strong>. <br />
        ¡Hecho con amor por maestros de la panificación! 🥐☕
      </p>
      <img 
        src='/fotoLocal.jpg'
        alt="Foto del Local" 
        className='w-full max-w-3xl mx-auto rounded-xl shadow-lg'
      />
    </div>
  )
} */
  const Home = () => {
    return (
      <div className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/fotoLocal.jpg')" }}>
        <div className="bg-yellow-950 bg-opacity-60 p-8 rounded-xl text-center max-w-2xl mx-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Panificadora y Cafetería <span className="text-amber-300">Mathius</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            🎉 Este julio cumplimos <strong>32 años</strong> llevando el verdadero sabor artesanal de nuestras manos a tu mesa.
            <br /><br />
            Te esperamos en <strong>Ayacucho 909, esq. Mota Botello</strong> 🥐☕
            <br /><br />
            ¡Hecho con amor por maestros de la panificación catamarqueña! 
          </p>
        </div>
      </div>
    )
  }

export default Home