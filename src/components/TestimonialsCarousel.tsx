import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Raquel Araujo",
    text: "O curso permitiu que eu sistematizasse uma série de questões que já haviam sido afloradas dentro de mim desde o diagnóstico e aprofundasse-me em cada uma delas de uma maneira que eu jamais faria por conta própria.",
  },
  {
    name: "Daniela Machado",
    text: "Os temas abordados foram importantes para que não fiquemos achando que nossa doença é o fim da linha. Encaramos como aprendizado. Hoje me acho uma pessoa muito melhor.",
  },
  {
    name: "Larissa Soares",
    text: "O programa me ajudou a refletir sobre tudo que tenho passado em meu tratamento, mostrando-me alternativas e soluções para enfrentar de uma maneira mais forte e segura.",
  },
  {
    name: "Juliana Toledo",
    text: "Depois do Programa a minha vida foi transformada, em todos os sentidos. Mente, corpo, espírito, pensamento no futuro, atitudes e ações. Hoje eu vejo como eu cresci depois disso tudo.",
  },
  {
    name: "Marcia Ferreira",
    text: "Para mim, foi muito importante para enfrentar esse tratamento de uma forma mais positiva. O câncer não é o fim, ele pode ser o começo de uma transformação.",
  },
  {
    name: "Raquel Araujo",
    text: "Gostei muito de refletir qual era o sentido da doença para minha vida, responder o primeiro questionário foi muito impactante para mim. Ademais, amei a maneira como a morte, medos, caridade foram abordados.",
  },
  {
    name: "Aline Martins",
    text: "Para mim foi um divisor de águas, a gente em um ano viveu coisas que em vários anos não conseguimos viver.",
  },
  {
    name: "Larissa Soares",
    text: "Das reflexões que pude ter. Alguns tópicos abordados me deixaram bastante pensativa, pois nunca tinha tirado um tempo do meu dia a dia para refletir sobre meus medos, desafios, sonhos e etc.",
  },
  {
    name: "Vera",
    text: "O programa nos ensina a nos ver de uma forma que não estamos acostumados, você se valoriza mais, nos vemos de forma mais liberta, mais leve.",
  },
  {
    name: "Raquel Araujo",
    text: "Impossível responder o que eu menos gostei porque todos os temas foram importantíssimos para o universo de quem está lutando contra a doença e cada um deles foi muito bem abordado.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Depoimentos
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-soft h-full">
                  <CardContent className="pt-8 pb-8 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground italic mb-6 leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Participante do Programa</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
