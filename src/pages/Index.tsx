import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const technologies = [
    {
      icon: 'Zap',
      title: 'Квантовые батареи',
      description: 'Хранение энергии на квантовом уровне с КПД до 98%'
    },
    {
      icon: 'Sun',
      title: 'Солнечные панели 4.0',
      description: 'Эффективность преобразования до 65% при любой погоде'
    },
    {
      icon: 'Wind',
      title: 'Воздушные турбины',
      description: 'Ультратихие генераторы нового поколения'
    },
    {
      icon: 'Cpu',
      title: 'ИИ-контроль',
      description: 'Интеллектуальное управление энергосетями'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">ЭНЕРГИЯ</h1>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/d4ec025a-8ae1-40d4-9cce-abfd743089bc/files/7c629c0a-9d7b-4fe2-b270-16386a813ee6.jpg" 
            alt="Energy Technology" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black text-gradient neon-glow animate-glow-pulse">ЭНЕРГИЯ БУДУЩЕГО - СЕГОДНЯ!</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">Перспективные Энергетические Технологии</p>
            <div className="flex gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 card-glow"
                onClick={() => scrollToSection('about')}
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                Узнать больше
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="technologies" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient">
            Наши технологии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-glow hover:scale-105 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name={tech.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient text-center">
              О компании
            </h2>
            <div className="space-y-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Наша миссия</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Мы создаём энергетические решения завтрашнего дня уже сегодня. 
                      Наша цель — обеспечить планету чистой, безопасной и доступной энергией 
                      через инновационные технологии и научные разработки.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Инновации</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Наша команда из 500+ учёных и инженеров разрабатывает технологии, 
                      которые меняют представление об энергетике. Квантовые батареи, 
                      солнечные панели нового поколения и ИИ-системы управления — 
                      всё это реальность в наших лабораториях.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Глобальное влияние</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Присутствие в 45 странах, более 1000 реализованных проектов 
                      и 50 ГВт установленной мощности. Мы обеспечиваем энергией 
                      более 30 миллионов домов по всему миру.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gradient text-center">
              Контакты
            </h2>
            <Card className="p-8 bg-card border-border card-glow">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 card-glow"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">info@energy.tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 925 108 2002</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Офис</p>
                    <p className="font-medium">Москва, Сити</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 ЭНЕРГИЯ. Технологии будущего — сегодня!</p>
        </div>
      </footer>
    </div>
  );
}