import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ContactButtons from "@/components/ContactButtons";
import heroImage from "@/assets/hero-danca-junina.jpg";
import ongImage from "@/assets/projeto-social.jpg";
import apresentacaoImage from "@/assets/apresentacao-1.jpg";
import apresentacao2Image from "@/assets/apresentacao-2.jpg";
import grupoFotoImage from "@/assets/grupo-foto.jpg";
import grupoApresentacao1 from "@/assets/grupo-apresentacao-1.jpg";
import grupoEnsaio1 from "@/assets/grupo-ensaio-1.jpg";
import grupoQuadrilha1 from "@/assets/grupo-quadrilha-1.jpg";
import grupoBastidores1 from "@/assets/grupo-bastidores-1.jpg";
import ongCriancas1 from "@/assets/ong-criancas-1.jpg";
import ongIdosos1 from "@/assets/ong-idosos-1.jpg";
import ongArtesanato1 from "@/assets/ong-artesanato-1.jpg";
import ongEvento1 from "@/assets/ong-evento-1.jpg";
import { Music, Users, Heart, Calendar, MapPin, Award } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'grupo' | 'ong'>('grupo');

  const grupoImages = [
    { src: grupoApresentacao1, alt: "Apresentação do Arraial do Amor Junino" },
    { src: grupoEnsaio1, alt: "Ensaio do grupo" },
    { src: grupoQuadrilha1, alt: "Formação da quadrilha" },
    { src: grupoBastidores1, alt: "Bastidores da apresentação" },
    { src: grupoFotoImage, alt: "Foto oficial do grupo" }
  ];

  const ongImages = [
    { src: ongCriancas1, alt: "Projeto com crianças" },
    { src: ongIdosos1, alt: "Oficina com idosos" },
    { src: ongArtesanato1, alt: "Atividade de artesanato" },
    { src: ongEvento1, alt: "Evento beneficente" },
    { src: ongImage, alt: "Projetos sociais da ONG" }
  ];

  const apresentacoes = [
    {
      id: 1,
      title: "Festival de Inverno de Bonito",
      date: "Julho 2024",
      location: "Bonito, MG",
      image: apresentacao2Image,
      description: "Apresentação especial no tradicional Festival de Inverno"
    },
    {
      id: 2,
      title: "Festa Junina da Praça da Liberdade",
      date: "Junho 2024", 
      location: "Belo Horizonte, MG",
      image: apresentacaoImage,
      description: "Grande apresentação na capital mineira"
    },
    {
      id: 3,
      title: "Arraial do Mercado Central",
      date: "Junho 2024",
      location: "Belo Horizonte, MG", 
      image: grupoFotoImage,
      description: "Quadrilha tradicional no coração da cidade"
    },
    {
      id: 4,
      title: "Festival de São João de Tiradentes",
      date: "Junho 2024",
      location: "Tiradentes, MG",
      image: apresentacao2Image,
      description: "Participação no histórico Festival de São João"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-6 sticky top-0 z-50 shadow-festive">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Music className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Arraial do Amor Junino</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setActiveTab('grupo')}
                className={`hover:text-accent-light transition-colors ${activeTab === 'grupo' ? 'text-accent' : ''}`}
              >
                O Grupo
              </button>
              <button 
                onClick={() => setActiveTab('ong')}
                className={`hover:text-accent-light transition-colors ${activeTab === 'ong' ? 'text-accent' : ''}`}
              >
                ONG
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Grupo de Dança Junina Mineira" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            Tradição Mineira Autêntica
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Arraial do Amor Junino
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Preservando e compartilhando a rica cultura da dança junina tradicional de Minas Gerais
          </p>
          <ContactButtons className="justify-center" />
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Tab Navigation Mobile */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-2 bg-muted p-2 rounded-lg">
            <button
              onClick={() => setActiveTab('grupo')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'grupo' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
              }`}
            >
              O Grupo
            </button>
            <button
              onClick={() => setActiveTab('ong')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'ong' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
              }`}
            >
              ONG
            </button>
          </div>
        </div>

        {activeTab === 'grupo' && (
          <div className="space-y-16">
            {/* Sobre o Grupo */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Sobre o Grupo</h2>
                <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Há mais de 20 anos preservando e divulgando a autêntica cultura junina mineira através da dança tradicional
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-festive transition-all duration-300">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">25+ Dançarinos</h3>
                    <p className="text-muted-foreground">
                      Grupo experiente e dedicado à preservação cultural
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-festive transition-all duration-300">
                  <CardContent className="p-6">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-secondary" />
                    <h3 className="text-xl font-semibold mb-2">200+ Apresentações</h3>
                    <p className="text-muted-foreground">
                      Experiência em festivais, eventos corporativos e culturais
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-festive transition-all duration-300">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-semibold mb-2">Reconhecimento</h3>
                    <p className="text-muted-foreground">
                      Premiado em diversos festivais de cultura popular
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Carousel className="w-full max-w-lg mx-auto">
                    <CarouselContent>
                      {grupoImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              className="rounded-lg shadow-warm w-full h-80 object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Nosso Grupo</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      O Arraial do Amor Junino é formado por mais de 25 dançarinos dedicados 
                      à preservação e divulgação da autêntica cultura junina mineira.
                    </p>
                    <p>
                      Com trajes tradicionais coloridos e coreografias que respeitam a tradição, 
                      levamos alegria e cultura para festivais, eventos corporativos e celebrações em todo o estado.
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Award className="h-5 w-5" />
                      <span className="font-semibold">20+ anos de tradição</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Apresentações Anteriores */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Apresentações Anteriores</h2>
                <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6"></div>
                <p className="text-xl text-muted-foreground">
                  Confira alguns dos nossos trabalhos mais recentes
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {apresentacoes.map((apresentacao) => (
                  <Card key={apresentacao.id} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={apresentacao.image} 
                        alt={apresentacao.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{apresentacao.date}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{apresentacao.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{apresentacao.location}</span>
                      </div>
                      <p className="text-muted-foreground">{apresentacao.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'ong' && (
          <div className="space-y-16">
            {/* Sobre a ONG */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Associação Amor Junino</h2>
                <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Transformando vidas através da cultura e promovendo inclusão social por meio da dança tradicional
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Carousel className="w-full max-w-lg mx-auto">
                    <CarouselContent>
                      {ongImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              className="rounded-lg shadow-warm w-full h-80 object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Nossa Missão Social</h3>
                  <div className="space-y-4 text-muted-foreground">
                  <p>
                      A Associação Amor Junino, vinculada ao nosso grupo, desenvolve projetos sociais 
                      que utilizam a dança junina como ferramenta de transformação social e preservação cultural.
                    </p>
                    <p>
                      Atendemos crianças, jovens e idosos em situação de vulnerabilidade social, 
                      oferecendo oficinas gratuitas de dança, música e artesanato tradicional.
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Heart className="h-5 w-5" />
                      <span className="font-semibold">Mais de 500 vidas impactadas</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projetos */}
            <section>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Nossos Projetos</h3>
                <div className="w-20 h-1 bg-gradient-warm mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-festive transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Dança para Todos</h4>
                    <p className="text-muted-foreground">
                      Oficinas gratuitas de dança junina para crianças e adolescentes da comunidade
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-festive transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Memórias Vivas</h4>
                    <p className="text-muted-foreground">
                      Projeto com idosos para preservar e transmitir tradições culturais
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-festive transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Music className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Instrumentos Tradicionais</h4>
                    <p className="text-muted-foreground">
                      Ensino de instrumentos típicos da música junina e folclórica
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        <Separator className="my-16" />

        {/* Contato */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Entre em Contato</h2>
          <div className="w-24 h-1 bg-gradient-festive mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interessado em contratar uma apresentação ou conhecer nossos projetos sociais? 
            Entre em contato conosco!
          </p>
          <ContactButtons className="justify-center" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-hero text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Music className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Arraial do Amor Junino</h3>
          </div>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Preservando a tradição, construindo o futuro através da cultura popular mineira.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <p className="text-white/80">© 2024 Arraial do Amor Junino - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;