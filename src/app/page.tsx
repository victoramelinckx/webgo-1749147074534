
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tus Ventas en 24 Horas" subheadline="Convierte tus recomendaciones en ventas online, con nuestro curso de Ventas Express. Entregamos tu web de ventas en menos de 24 horas y te apoyamos 24/7." cta1="Empieza Ahora" />
<How step1Title="Inscríbete al Curso" step1Desc="Unete al Curso de Ventas Express." step2Title="Aprende a vender online" step2Desc="Transforma tu negocio para ventas digitales." step3Title="Aumenta tus ventas" step3Desc="Consigue más clientes sin anuncios pagados." />
<Aboutus headline="WebGo: Digitaliza Tu Negocio Local" subheadline="Ofrecemos soluciones digitales simples y eficaces para impulsar tus ventas online." beneficiotitulo1="Aprende a Vender Online" beneficio1="Curso exprés para dominar las ventas en redes sociales." beneficiotitulo2="Ahorra Tiempo y Esfuerzo" beneficio2="Gestiona tu sitio web sin complicaciones con WebGo." />
<Services heading="Digitaliza Tus Ventas y Multiplica Tus Ingresos" description="Curso de Ventas Express, tu puente hacia la venta online sin necesidad de anuncios pagados. Ahorra tiempo y genera más ventas en menos tiempo." services={[{"name":"Estrategias de Venta Digital","icon":"strategy","description":"Aprende a vender en la era digital."},{"name":"Gestión de Redes Sociales","icon":"social","description":"Vende más a través de tus redes."},{"name":"Optimización del tiempo","icon":"time","description":"Ahorra tiempo con estrategias efectivas."},{"name":"Soporte 24/7","icon":"support","description":"Te acompañamos en tu crecimiento."},{"name":"Web de Ventas en 24 horas","icon":"web","description":"Tu web lista y vendiendo en un día."},{"name":"Comunidad de Emprendedores","icon":"community","description":"Únete a nuestra red de empresarios."}]} />
<BeforeAndAfter subheadline="Transformando ideas digitales en resultados tangibles y deslumbrantes" />
<Faq faqs={[{"pregunta":"¿Cómo puede ayudarme el Curso de Ventas Express de WebGo a vender sin anuncios en redes sociales?","respuesta":"Nuestro Curso de Ventas Express te proporcionará las herramientas y estrategias necesarias para vender tus productos o servicios en las redes sociales, sin necesidad de gastar en anuncios. Te enseñaremos técnicas efectivas de marketing orgánico, cómo crear contenido atractivo y cómo conectar de manera efectiva con tu público objetivo."},{"pregunta":"¿El curso de ventas de WebGo es apto para alguien que no tiene experiencia en ventas online?","respuesta":"¡Absolutamente! El Curso de Ventas Express está diseñado para dueños de negocios como tú, que no tienen experiencia previa en ventas online. El curso tiene un lenguaje sencillo y directo, y proporciona instrucciones paso a paso para cada método de venta en redes sociales."},{"pregunta":"¿Necesito invertir mucho tiempo para gestionar mis ventas online después de tomar el curso de ventas de WebGo?","respuesta":"Entendemos que como dueño de un pequeño negocio, tu tiempo es valioso. Por eso, el Curso de Ventas Express te enseñará a optimizar y automatizar tus ventas online, liberando más tiempo para que te concentres en otros aspectos de tu negocio."},{"pregunta":"¿Cómo puede el Curso de Ventas Express de WebGo mejorar mis ventas por recomendación?","respuesta":"El Curso de Ventas Express te ayudará a ampliar tu alcance más allá de tus clientes habituales. Aprenderás cómo utilizar las redes sociales para llegar a un público más amplio, lo que incrementará tu potencial de ventas y permitirá que más personas recomienden tu negocio."},{"pregunta":"¿Cuál es la inversión para el Curso de Ventas Express de WebGo y qué incluye?","respuesta":"El Curso de Ventas Express tiene un precio de $120.000 CLP o USD 150. Incluye acceso a lecciones en línea durante 3 semanas, donde aprenderás a vender en las redes sociales sin anuncios pagados, atraer a un público más amplio y generar más ventas para tu negocio."}]} />
<BookAppointment 
                      heading="Transforma tus Recomendaciones en Ventas Digitales" 
                      description="Con el Curso de Ventas Express, convierte tu pequeño negocio en Santiago en un gigante de las ventas online sin necesidad de anuncios pagados. Invierte en tu futuro, invierte en ventas digitales."
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="HZ7uYmqvKBQzJLxuV9XaWK1Bhpz1"
                    />
<Footer />
    </main>
  );
}
