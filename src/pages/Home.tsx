import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import homeHero from "@/assets/home-hero.png";

const Home = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Ambiente acolhedor e seguro, com foco na experiência e dignidade do paciente",
    },
    {
      icon: Shield,
      title: "Rigor Científico",
      description: "Baseado em evidências, sem charlatanismo ou promessas irreais de cura",
    },
    {
      icon: Users,
      title: "Equipe Interdisciplinar",
      description: "Oncologista, nutricionista, acupuntura, meditação e apoio contínuo",
    },
    {
      icon: Sparkles,
      title: "Programa Estruturado",
      description: "Percurso de 6 meses com início, meio e fim claramente definidos",
    },
  ];

  const features = [
    "Único em Brasília com percurso estruturado",
    "Conduzido por oncologista titular da SBOC",
    "Integrado por conceitos avançados (Salutogênese, Logoterapia e Crescimento Pós Trauma)",
    "Complementa psicoterapia e oncologia convencional",
    "Foco na experiência do paciente",
    "Ambiente seguro e humanizado",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img 
          src={homeHero} 
          alt="Programa de Enfrentamento ao Câncer - Ciência e Propósito" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 px-4 py-32">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Ciência, Humanidade e Propósito em Cada Etapa da Jornada
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Um cuidado integrativo guiado por rigor científico, acolhimento e busca por sentido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contato">
                  Agende uma Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-background/80 backdrop-blur-sm">
                <Link to="/sobre">Conheça o Programa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
              Um Percurso Claro e Seguro
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
              O Programa de Enfrentamento ao Câncer foi criado para ajudar pacientes a atravessar 
              o câncer com mais clareza, força interna e sentido. Não se trata apenas de intervenções 
              integrativas: é um caminho estruturado, ético e profundamente humano.
            </p>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Em 6 meses, você percorre temas essenciais, recebe suporte interdisciplinar e encontra 
              um ambiente seguro, científico e livre de falsas promessas. O programa é <strong className="text-foreground">complementar</strong> ao tratamento oncológico convencional.
            </p>
          </div>
        </div>
      </section>

      {/* Differentials Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Diferenciais do Programa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-hover transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Por Que Escolher Este Programa?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Pronto Para Iniciar Sua Jornada?
          </h2>
          <p className="text-xl mb-8 opacity-90 text-balance">
            Agende uma consulta e descubra como o programa pode apoiá-lo em todas as dimensões: 
            física, emocional, espiritual e relacional.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contato">
              Entrar em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
