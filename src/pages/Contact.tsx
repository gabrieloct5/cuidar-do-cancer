import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
    setIsSubmitting(false);
  };

  const testimonials = [
    {
      name: "Maria Silva",
      text: "O programa me ajudou a encontrar paz e propósito durante o tratamento. A equipe é extremamente acolhedora.",
      role: "Paciente",
    },
    {
      name: "João Santos",
      text: "Encontrei aqui o suporte que precisava para enfrentar essa jornada com mais clareza e esperança.",
      role: "Paciente",
    },
    {
      name: "Ana Costa",
      text: "O cuidado científico aliado ao acolhimento humano fez toda a diferença na minha recuperação.",
      role: "Paciente",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende sua consulta e saiba se o Programa é adequado para o seu momento
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(61) 99999-9999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Como podemos ajudá-lo?"
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-soft">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-primary mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Localização</h4>
                      <p className="text-muted-foreground">Brasília – DF</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <p className="text-muted-foreground">Em breve</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-lighter rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">Em breve</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#25D366] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground mb-2">Atendimento direto e rápido</p>
                      <Button 
                        size="sm" 
                        className="bg-[#25D366] hover:bg-[#1fb855] text-white"
                        onClick={() => {
                          const phoneNumber = "5561999999999";
                          const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Programa de Enfrentamento ao Câncer.");
                          window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                        }}
                      >
                        Enviar mensagem
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft bg-gradient-to-br from-primary-lighter to-card">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Horário de Atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 18h<br />
                  Atendemos mediante agendamento prévio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Depoimentos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-soft">
                <CardContent className="pt-8">
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
