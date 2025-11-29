const Space = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Description */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              O Programa ocorre em parceria com a Casa Adhara. Um ambiente construído para acolher, inspirar segurança e favorecer a escuta profunda. 
              É um espaço onde o paciente pode falar sobre medos, dúvidas, crenças e expectativas, 
              sem julgamentos e com total respeito à sua história e às suas escolhas.
            </p>
          </div>
        </section>

        {/* Photos Section - Placeholder */}
        <section>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-video bg-muted rounded-2xl shadow-soft flex items-center justify-center"
              >
                <p className="text-muted-foreground">Foto do espaço {item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Space;
