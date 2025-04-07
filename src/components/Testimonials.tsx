
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Redujimos el tiempo de procesamiento de nómina de 2 días a 30 minutos. Increíble herramienta.",
      author: "María Fernández",
      position: "Dir. de Recursos Humanos",
      company: "Grupo Industrial MX",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote: "La integración con WhatsApp hace que nuestro trabajo sea muchísimo más eficiente. Todos los empleados reciben sus recibos al instante.",
      author: "Roberto Gómez",
      position: "Gerente de Finanzas",
      company: "Constructora Azteca",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      quote: "El cumplimiento fiscal automatizado nos ha salvado de muchos dolores de cabeza con el SAT. Altamente recomendado.",
      author: "Daniela Torres",
      position: "Contadora Senior",
      company: "Restaurantes Unidos",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600">
            Empresas de todos los tamaños en México confían en NOWA para su gestión de nómina
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 13.3333C9.33333 12.2288 8.4379 11.3333 7.33333 11.3333C6.22876 11.3333 5.33333 12.2288 5.33333 13.3333C5.33333 14.4379 6.22876 15.3333 7.33333 15.3333C8.4379 15.3333 9.33333 14.4379 9.33333 13.3333Z" fill="#00796B"/>
                  <path d="M15.3333 13.3333C15.3333 12.2288 14.4379 11.3333 13.3333 11.3333C12.2288 11.3333 11.3333 12.2288 11.3333 13.3333C11.3333 14.4379 12.2288 15.3333 13.3333 15.3333C14.4379 15.3333 15.3333 14.4379 15.3333 13.3333Z" fill="#00796B"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 18.3925 4.77901 20.6104 6.10142 22.4541C6.29369 22.7246 6.38638 23.0592 6.3518 23.3945L5.94438 26.9029C5.87793 27.5306 6.46975 28.0248 7.08232 27.8692L11.0411 26.8587C11.2749 26.7961 11.5195 26.8133 11.7414 26.9064C13.0255 27.4553 14.4696 27.7602 15.9996 27.7602C16 27.7602 16.0002 27.7602 16.0004 27.7602L16 28Z" fill="#00796B"/>
                </svg>
              </div>
              <p className="italic text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent/10 p-8 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <h3 className="text-4xl font-bold text-primary mb-2">85%</h3>
              <p className="text-gray-600">Reducción en tiempo de procesamiento de nómina</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <h3 className="text-4xl font-bold text-primary mb-2">99.8%</h3>
              <p className="text-gray-600">Precisión en cálculos fiscales</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow">
              <h3 className="text-4xl font-bold text-primary mb-2">+500</h3>
              <p className="text-gray-600">Empresas mexicanas nos confían su nómina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
