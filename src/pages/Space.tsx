import casaAdharaLogo from "@/assets/casa-adhara-logo.png";
import space1 from "@/assets/space-1.jpg";
import space2 from "@/assets/space-2.jpg";
import space3 from "@/assets/space-3.jpg";
import space4 from "@/assets/space-4.jpg";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const Space = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Description */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="flex justify-center mb-8">
              <img 
                src={casaAdharaLogo} 
                alt="Casa Adhara"
                className="h-56 md:h-72 w-auto"
              />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              O Programa ocorre em parceria com a Casa Adhara. Um ambiente construído para acolher, inspirar segurança e favorecer a escuta profunda. 
              É um espaço onde o paciente pode falar sobre medos, dúvidas, crenças e expectativas, 
              sem julgamentos e com total respeito à sua história e às suas escolhas.
            </p>
          </div>
        </section>

        {/* Photos Section */}
        <section>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-video rounded-xl shadow-soft overflow-hidden">
              <img 
                src={space1} 
                alt="Jardim interno da Casa Adhara com estátua de Buda"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl shadow-soft overflow-hidden">
              <img 
                src={space2} 
                alt="Sala de atendimento com poltronas e decoração acolhedora"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl shadow-soft overflow-hidden">
              <img 
                src={space3} 
                alt="Espaço de convivência com sofás e plantas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl shadow-soft overflow-hidden">
              <img 
                src={space4} 
                alt="Momento de conexão e acolhimento no espaço"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl shadow-soft overflow-hidden">
              <img 
                src={space1} 
                alt="Espaço 5 - adicione sua foto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl shadow-soft overflow-hidden">
              <img 
                src={space1} 
                alt="Espaço 6 - adicione sua foto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Space;
