import { Sparkles, Heart, Zap, Star, Droplet, Wind } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Sparkles,
    title: "Design de Sobrancelhas",
    description: "Correção de formato, alinhamento e simetria para sobrancelhas mais harmônicas e definidas.",
    price: "Consulte valores pelo WhatsApp",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Micropigmentação de Sobrancelhas",
    description: "Técnicas modernas para preencher falhas e realçar o desenho natural das sobrancelhas.",
    price: "Consulte valores pelo WhatsApp",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Brow Lamination / Fios Alinhados",
    description: "Procedimento para alinhar, dar volume e deixar os fios mais cheios e organizados.",
    price: "Consulte valores pelo WhatsApp",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: Star,
    title: "Micro Labial",
    description: "Realce da cor e contorno dos lábios, com efeito natural, saudável e mais viçoso.",
    price: "Consulte valores pelo WhatsApp",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Droplet,
    title: "Cílios e Beleza do Olhar",
    description: "Procedimentos voltados para destacar o olhar e complementar os resultados das sobrancelhas.",
    price: "Consulte valores pelo WhatsApp",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wind,
    title: "Manutenção / Retoque",
    description: "Sessão de manutenção para preservar cor, formato e durabilidade da micropigmentação.",
    price: "Consulte valores pelo WhatsApp",
    gradient: "from-teal-500 to-emerald-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full tracking-wider uppercase mb-4">
            Procedimentos
          </span>
          <h2 className="mt-4 text-gray-900">
            Procedimentos para realçar a sua beleza
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cada atendimento é feito de forma personalizada, unindo técnica e cuidado para valorizar o formato do seu rosto e o seu estilo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <a
                      href="https://wa.me/5591993761639"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-900 hover:text-rose-500 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Consultar no WhatsApp →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5591993761639"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/50 hover:scale-105 transition-all"
          >
            Agendar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
