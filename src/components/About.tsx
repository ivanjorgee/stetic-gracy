import { CheckCircle, Award, Users, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const benefits = [
  "Atendimento individual e humanizado",
  "Técnicas atuais em micropigmentação e design",
  "Foco em naturalidade e valorização do rosto",
  "Espaço acolhedor em Castanhal – PA",
  "Orientações de pré e pós-procedimento",
];

const stats = [
  { icon: Award, number: "+3 anos", label: "Experiência em micropigmentação" },
  { icon: Users, number: "+500", label: "Procedimentos realizados" },
  { icon: Heart, number: "Atendimento", label: "Individual e humanizado" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbnxlbnwxfHx8fDE3NjM5MzcyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clínica de Estética"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-50" />
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl max-w-xs"
            >
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                      <div className="text-2xl bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full tracking-wider uppercase mb-4">
              Sobre
            </span>
            <h2 className="mt-4 mb-6 text-gray-900">
              Sobre a Gracy Silva Beauty & Estética
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Gracy Silva é micropigmentadora em Castanhal – PA, especializada em sobrancelhas, micro labial, beleza facial e cílios. Com olhar detalhista e foco em naturalidade, ela ajuda mulheres a se sentirem mais seguras e confiantes no dia a dia. Cada atendimento é feito com explicação clara do procedimento, escolha cuidadosa das técnicas e um cuidado especial com conforto, segurança e resultado.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/5591993761639"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/50"
            >
              Agendar avaliação pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
