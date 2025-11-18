import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="BIOFLEX Logo"
            width={150}
            height={60}
            className="h-16 sm:h-20 w-auto"
            priority
          />
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <a href="#producto" className="text-sm lg:text-base text-gray-700 hover:text-green-600 transition-colors">Producto</a>
            <a href="#especificaciones" className="text-sm lg:text-base text-gray-700 hover:text-green-600 transition-colors">Especificaciones</a>
            <a href="#servicios" className="text-sm lg:text-base text-gray-700 hover:text-green-600 transition-colors">Servicios</a>
            <a href="#contacto" className="text-sm lg:text-base text-gray-700 hover:text-green-600 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="producto" className="bg-gradient-to-b from-green-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-3 sm:mb-4 px-2">
              Menos residuos, más soluciones
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto px-2">
              Bolsa biodegradable hecha a base de maíz para un futuro más sostenible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mt-8 sm:mt-12 lg:mt-16">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Año de Fabricación</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-700">2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Material</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">Hecho a base de maíz</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600 text-white rounded-lg p-4 sm:p-6">
                <p className="text-base sm:text-lg font-semibold mb-2">MODELO: ESTÁNDAR</p>
                <p className="text-xs sm:text-sm opacity-90">Certificación ISO 17088</p>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2">
              <Image
                src="/fotoo.jpg"
                alt="Rollos de bolsa BIOFLEX"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones Técnicas */}
      <section id="especificaciones" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-8 sm:mb-12 px-2">Especificaciones Técnicas</h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Dimensiones</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-200">
                  <span className="text-sm sm:text-base text-gray-600">Ancho</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">500 mm</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-200">
                  <span className="text-sm sm:text-base text-gray-600">Longitud</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">2000 m</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3">
                  <span className="text-sm sm:text-base text-gray-600">Espesor</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">40 micrones</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Datos Importantes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Biodegradable</p>
                    <p className="text-xs sm:text-sm text-gray-600">Comprometidos con el medio ambiente</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Alta resistencia mecánica</p>
                    <p className="text-xs sm:text-sm text-gray-600">Durabilidad y confiabilidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Apto para contacto indirecto con alimentos</p>
                    <p className="text-xs sm:text-sm text-gray-600">Seguro para uso alimentario</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Vida útil: 1 a 3 meses</p>
                    <p className="text-xs sm:text-sm text-gray-600">Óptimo para almacenamiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 border-2 border-green-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-1">Certificación</h4>
                <p className="text-sm sm:text-base text-green-700">ISO 17088 - Plásticos compostables para reciclaje orgánico industrial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-8 sm:mb-12 px-2">Servicios Incluidos</h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Capacitación Técnica</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Ofrecemos capacitación técnica especializada para operarios de embalaje, 
                asegurando un uso óptimo del producto y maximizando su eficiencia.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Asistencia Técnica</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Brindamos asistencia técnica continua ante cualquier falla o consulta de aplicación, 
                garantizando el mejor soporte para nuestros clientes.
              </p>
            </div>
          </div>
          
          {/* Línea divisoria verde oscura */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl h-1 bg-green-800 rounded-full" style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}></div>
          </div>
        </div>
      </section>

      {/* Modelo Industrial Pesado */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-6 sm:mb-8 px-2">MODELO: INDUSTRIAL PESADO</h2>
          
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Image
              src="/fotoo.jpg"
              alt="Rollos de bolsa BIOFLEX Industrial Pesado"
              width={800}
              height={500}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Banda gris con información */}
          <div className="bg-gray-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">AÑO DE FABRICACIÓN: 2025</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">HECHO A BASE DE MAÍZ</span>
              </div>
            </div>
          </div>

          {/* Especificaciones Técnicas */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Dimensiones</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-200">
                  <span className="text-sm sm:text-base text-gray-600">Ancho</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">1000 mm</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-200">
                  <span className="text-sm sm:text-base text-gray-600">Longitud</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">4000 m</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3">
                  <span className="text-sm sm:text-base text-gray-600">Espesor</span>
                  <span className="text-lg sm:text-xl font-bold text-green-700">20 micrones</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Datos Importantes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Biodegradable</p>
                    <p className="text-xs sm:text-sm text-gray-600">Comprometidos con el medio ambiente</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Alta resistencia mecánica</p>
                    <p className="text-xs sm:text-sm text-gray-600">Durabilidad y confiabilidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Apto para contacto indirecto con alimentos</p>
                    <p className="text-xs sm:text-sm text-gray-600">Seguro para uso alimentario</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">Vida útil: 1 a 3 meses</p>
                    <p className="text-xs sm:text-sm text-gray-600">Óptimo para almacenamiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificación */}
          <div className="bg-green-50 rounded-lg p-6 sm:p-8 border-2 border-green-200 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-1">Certificación</h4>
                <p className="text-sm sm:text-base text-green-700">ISO 17088 - Plásticos compostables para reciclaje orgánico industrial</p>
              </div>
            </div>
          </div>

          {/* Servicios Incluidos */}
          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6 sm:mb-8">Servicios Incluidos</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Capacitación Técnica</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Ofrecemos capacitación técnica especializada para operarios de embalaje, 
                  asegurando un uso óptimo del producto y maximizando su eficiencia.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Asistencia Técnica</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Brindamos asistencia técnica continua ante cualquier falla o consulta de aplicación, 
                  garantizando el mejor soporte para nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-green-800 text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contacto</h2>
            <div className="flex items-center justify-center">
              <a 
                href="tel:3442482737"
                className="flex items-center gap-2 sm:gap-3 hover:text-green-300 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-base sm:text-lg">3442-482737</span>
              </a>
            </div>
            <p className="mt-6 sm:mt-8 text-green-200 text-xs sm:text-sm">
              © 2025 BIOFLEX - Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
