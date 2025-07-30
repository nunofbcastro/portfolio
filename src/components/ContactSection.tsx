import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  language: 'pt' | 'en';
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const content = {
    pt: {
      title: "Contacto",
      subtitle: "Interessado em trabalhar comigo? Estou disponível para freelancing ou propostas de colaboração.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente."
    },
    en: {
      title: "Contact",
      subtitle: "Interested in working together? I'm open to freelance or collaboration proposals.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again."
    }
  };

  const text = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: text.success,
      description: language === 'pt' ? "Responderei em breve!" : "I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:joao@exemplo.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Globe, label: "Website", href: "https://exemplo.com" },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {text.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {text.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{text.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{text.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{text.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{text.message}</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {text.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">
                    {language === 'pt' ? 'Ligações Sociais' : 'Social Links'}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="flex items-center gap-2 justify-start"
                          onClick={() => window.open(link.href, '_blank')}
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">FAQ</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">
                        {language === 'pt' ? 'Trabalhas remotamente?' : 'Do you work remotely?'}
                      </p>
                      <p className="text-muted-foreground">
                        {language === 'pt' ? 'Sim, disponível para trabalho remoto.' : 'Yes, available for remote work.'}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === 'pt' ? 'Forneces documentação?' : 'Do you provide documentation?'}
                      </p>
                      <p className="text-muted-foreground">
                        {language === 'pt' ? 'Sim, sempre com documentação e suporte técnico.' : 'Yes, always with technical documentation and support.'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};