import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Leaf, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const programComponents = [
    "5 consultas temáticas",
    "5 sessões de Acupuntura",
    "Plano de Atividade Física Personalizado (com opção de uso de aplicativo)",
    "Programa de Meditação e Yoga para Pacientes Oncológicos (5 sessões)",
    "Avaliação e Acompanhamento Nutricional (3 consultas)",
    "Participação livre na agenda de eventos do Programa",
    "Workshop de Enfrentamento ao Câncer",
  ];

  const themes = [
    "Identidade",
    "Um sentido para o câncer",
    "Hábitos de uma vida saudável",
    "Meditação como ferramenta de cura",
    "A importância da religião e da espiritualidade",
    "Falando sobre a finitude com serenidade",
    "Enfrentando seus medos",
    "Caridade e seus benefícios",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Serviços
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um programa estruturado de 6 meses para acompanhá-lo em todas as dimensões
          </p>
        </div>

        {/* Program Overview */}
        <section className="mb-16">
          <Card className="border-none shadow-soft bg-gradient-to-br from-primary-lighter to-card">
            <CardContent className="pt-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Programa de 6 Meses</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O Programa de Enfrentamento ao Câncer foi desenhado para acompanhar o paciente 
                ao longo de todo esse período, antecipando demandas emocionais, espirituais e 
                práticas, em vez de apenas reagir às crises quando elas aparecem.
              </p>
              <div className="bg-card/80 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">Composição do Programa:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {programComponents.map((component, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Thematic Consultations */}
        <section className="mb-16">
          <Card className="border-none shadow-soft">
            <CardContent className="pt-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Consultas em Oncologia Integrativa</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As consultas temáticas são o eixo central do Programa. Em cada uma delas, o 
                paciente é acompanhado em temas fundamentais para o enfrentamento do câncer, 
                sempre com um olhar para o futuro, para o protagonismo e para a construção de sentido.
              </p>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  Temas trabalhados ao longo do percurso:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {themes.map((theme, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <Brain className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-6 bg-primary-lighter rounded-xl">
                <p className="text-muted-foreground leading-relaxed">
                  Diferente de muitas abordagens que focam principalmente no passado, este Programa 
                  trabalha com um olhar voltado ao <strong className="text-foreground">futuro</strong>: 
                  como o paciente deseja viver daqui em diante, que tipo de relações deseja cultivar, 
                  que legado deseja construir e como pode atravessar o processo com mais coerência 
                  interna, autenticidade e paz de espírito.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Natural Therapies */}
        <section className="mb-16">
          <Card className="border-none shadow-soft">
            <CardContent className="pt-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Terapias Naturais Validadas e Seguras</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Além da estrutura principal, o Programa utiliza terapias naturais reconhecidas e 
                estudadas, que não interferem na quimioterapia quando prescritas corretamente. 
                Todas são conduzidas com rigor científico, ética e alinhamento ao oncologista titular.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="viscum" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-lg font-semibold text-primary">Viscum album (Extratos de Viscum)</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    <p className="mb-4">
                      O extrato de Viscum album é uma das terapias integrativas mais estudadas no 
                      contexto oncológico, com décadas de uso em países europeus. Entre os potenciais 
                      benefícios observados em estudos estão melhora da qualidade de vida, redução de 
                      fadiga, apoio à regulação imunológica e ao bem-estar emocional.
                    </p>
                    <p className="font-medium text-foreground">
                      No Programa, o Viscum é utilizado de forma ética, segura e padronizada, sempre 
                      respeitando o tratamento oncológico convencional e as decisões do oncologista responsável.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cannabis" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-lg font-semibold text-primary">Cannabis Medicinal</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    <p className="mb-4">
                      A Cannabis Medicinal é utilizada dentro das normas regulatórias da Anvisa, com 
                      objetivos terapêuticos claros e monitorados. Entre as indicações com evidência 
                      estão o controle de dor crônica, melhora do sono, redução de ansiedade, controle 
                      de náuseas e vômitos ligados ao tratamento e melhora do apetite.
                    </p>
                    <p className="font-medium text-foreground">
                      No Programa, a prescrição é feita com três pilares centrais: segurança clínica, 
                      avaliação cuidadosa de interações medicamentosas e acompanhamento contínuo, 
                      sempre alinhado ao plano de tratamento oncológico convencional.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Complementary Program */}
        <section className="mb-16">
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Um Programa Complementar — Nunca Concorrente
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O Programa de Enfrentamento ao Câncer <strong className="text-foreground">não substitui</strong> o 
                oncologista titular, não disputa pacientes e não interfere no plano de quimioterapia. 
                Pelo contrário: ele é construído para ser complementar, contribuindo para que o paciente 
                esteja mais fortalecido, esclarecido e amparado em sua jornada e que os laços de confiança 
                construídos sejam fortalecidos.
              </p>
              <p>
                <strong className="text-foreground">Importante:</strong> Somos proibidos de assumir o 
                tratamento quimioterápico do paciente ou encaminhar os pacientes para outros serviços.
              </p>
              <p>
                O Programa também não substitui o trabalho do psicólogo. Ele o complementa ao focar em 
                propósito, sentido de vida e enfrentamento do futuro, em sintonia com o cuidado emocional 
                já existente.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Program */}
        <section className="mb-16">
          <Card className="border-none shadow-soft bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6">Por que este Programa é necessário?</h2>
              <div className="space-y-4 text-lg leading-relaxed opacity-95">
                <p>
                  Muitos pacientes hoje não recebem orientação adequada em medicina integrativa e 
                  acabam expostos a informações desencontradas ou práticas sem evidência. Outros se 
                  sentem sozinhos na tarefa de dar sentido ao que estão vivendo, lidando com medos 
                  profundos, dúvidas espirituais e mudanças nas relações.
                </p>
                <p className="font-semibold text-xl">
                  Este Programa foi pensado como um porto seguro: um espaço onde ciência e propósito 
                  caminham juntos. Aqui, o paciente é orientado, acolhido e convidado a assumir o 
                  papel de autor da própria jornada, com mais serenidade, coerência interna e presença.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/contato">Agende Sua Consulta</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
