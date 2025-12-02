import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Award } from "lucide-react";
import drGabriel from "@/assets/dr-gabriel.jpg";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import sobreHero from "@/assets/sobre-hero.png";

const About = () => {
  const values = [
    "Ética",
    "Justiça",
    "Humanização",
    "Acolhimento",
    "Rigor científico",
    "Transparência",
    "Integralidade do cuidado",
    "Respeito à singularidade de cada pessoa",
  ];

  const credentials = [
    "Oncologista - Membro Titular da Sociedade Brasileira de Oncologia (SBOC)",
    "Especialista em Experiência do Paciente - Sírio Libanês - SP",
    "Certified Patient Experience Leader (CPXP) - Patient Experience Institute (PXI)",
    "Especialista Lean / Saúde - Lean Institute Brasil",
    "Certificação Design Thinking and Innovation - Harvard Business School (HBS)",
    "Black Belt - Lean Six Sigma - The Lean Six Sigma Council",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img 
          src={sobreHero} 
          alt="Sobre o Programa - Programa de Enfrentamento ao Câncer" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">

        {/* History */}
        <section className="mb-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                O Programa nasceu da percepção de que grande parte dos pacientes oncológicos 
                vive sua jornada de forma fragmentada — sem orientação integrada, sem clareza 
                sobre práticas seguras e, muitas vezes, vulneráveis a promessas enganosas ou 
                tratamentos sem evidência.
              </p>
              <p>
                Enquanto muitos serviços focam apenas em exames, medicações e controle de sintomas, 
                aqui o foco é ampliar o cuidado: unir ciência, saberes integrativos e uma abordagem 
                profunda do sentido de vida.
              </p>
              <p>
                O Programa de Enfrentamento ao Câncer foi desenhado para olhar para o futuro, 
                construindo propósito e protagonismo, sem deixar de acolher o sofrimento e a 
                vulnerabilidade presentes no caminho.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer um cuidado integral, acessível e eficiente, que una ciência e 
                  saberes integrativos, capaz de inspirar propósito e dignidade diante do sofrimento humano.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência segura para pacientes e oncologistas que desejam um 
                  enfrentamento ideal para o câncer.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="mt-8 border-none shadow-soft">
            <CardContent className="pt-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Valores</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-primary-lighter rounded-lg p-4 text-center font-medium text-primary"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Doctor Profile */}
        <section className="mb-20">
          <Card className="border-none shadow-soft bg-gradient-to-br from-primary-lighter to-card">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <img 
                  src={drGabriel} 
                  alt="Dr. Gabriel Machado Leite"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-elegant"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">Dr. Gabriel Machado Leite</h3>
                      <p className="text-muted-foreground">Condução do Programa</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-card/80 rounded-lg p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{credential}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <TestimonialsCarousel />

      </div>
    </div>
  );
};

export default About;
