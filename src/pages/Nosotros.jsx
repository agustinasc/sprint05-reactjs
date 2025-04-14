import { useNavigate } from "react-router-dom"


const Nosotros = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-[#5E272D] text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#E6A55D] mb-8 text-center">
          Nuestra historia
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p className="text-lg leading-relaxed">
              Desde Julio de 1993, somos una panadería y cafetería familiar con una sola misión:
              llevar a la mesa de cada catamarqueño productos frescos, artesanales y hechos con amor.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Con el paso del tiempo, nos convertimos en la panadería del barrio: un lugar donde el
              aroma del pan recién horneado se mezcla con la calidez de quienes nos eligen cada día.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Nuestro equipo está formado por trabajadores catamarqueños que comparten la pasión por
              lo artesanal y el compromiso de ofrecer siempre lo mejor. Gracias por ser parte de esta
              historia. Esperamos seguir acompañando cada desayuno, cada merienda, cada momento
              compartido… siendo parte de tu mesa, como desde el primer día.
            </p>
          </div>

          {/* Foto 1 */}
          <div className="flex flex-col gap-6">
            <img
              src="/nosotros2.jpeg"
              alt="Personal de la panadería"
              className="rounded-2xl shadow-lg object-cover h-64 w-full"
            />
            {/* Foto 2 */}
            <img
              src="/nosotros3.jpg"
              alt="Nuestro Equipo"
              className="rounded-2xl shadow-lg object-cover h-64 w-full"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
      >
        Volver atras
      </button>
    </section>
  )
}

export default Nosotros