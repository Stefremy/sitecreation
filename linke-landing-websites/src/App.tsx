import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Check, Globe, ShoppingCart, Headphones, LineChart, Sparkles, ArrowRight, Shield, GitGraphIcon } from 'lucide-react'

function WhatsappIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M20.52 3.48A11.82 11.82 0 0012 0C5.37 0 .01 5.36.01 12A11.9 11.9 0 002.4 17.7L0 24l6.5-2.14A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.9 0-3.78-.5-5.36-1.45l-.38-.23L4.3 20l1.17-2.02-.25-.4A9.05 9.05 0 012.95 12 9.05 9.05 0 0112 2.95 9.05 9.05 0 0121.05 12 9.05 9.05 0 0112 21.5z" />
      <path d="M17.6 14.2c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.17.2-.33.22-.62.08-1.7-.85-2.81-1.52-3.94-3.44-.29-.5.29-.46.83-1.54.09-.2.04-.38-.02-.53-.06-.14-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17 0-.37-.01-.57-.01-.2 0-.53.07-.81.38-.27.31-1.03 1.01-1.03 2.46 0 1.44 1.05 2.83 1.2 3.02.15.2 2.07 3.32 5.03 4.53 2.96 1.22 2.96.81 3.5.76.53-.05 1.78-.72 2.03-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

function BusinessCard({ name, role, phone, email, imageSrc }: { name: string; role: string; phone?: string; email?: string; imageSrc?: string }) {
  return (
    <div className="mt-4 flex w-full max-w-sm items-center gap-4 rounded-2xl border p-4">
      {imageSrc ? (
        <img src={imageSrc} alt={`${name} card`} className="h-16 w-28 rounded-md object-cover" />
      ) : (
        <div className="grid h-16 w-28 place-items-center rounded-md bg-neutral-100 text-sm">Imagem</div>
      )}
      <div className="flex-1">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-neutral-600">{role}</div>
        {phone && <div className="mt-2 text-xs text-neutral-700">📞 {phone}</div>}
        {email && <div className="text-xs text-neutral-700">✉️ {email}</div>}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <Hero />
      <Trust />
      <ValueGrid />
      <HowItWorks />
      <Showcase />
      <Plans />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

function Container({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>
}

function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-black text-white grid place-items-center font-bold">L</div>
          <span className="font-semibold">Linke</span>
        </div>
        <div className="hidden items-center gap-6 md:flex text-sm">
          <a href="#vantagens" className="hover:opacity-80">Vantagens</a>
          <a href="#como-funciona" className="hover:opacity-80">Como funciona</a>
          <a href="#planos" className="hover:opacity-80">Planos</a>
          <a href="#faq" className="hover:opacity-80">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-2xl" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
            Pedir diagnóstico
          </Button>
        </div>
      </Container>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <motion.h1
            className="text-4xl font-extrabold leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Websites que <span className="underline decoration-amber-400">vendem</span> e SEM MENSALIDADES!
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Criamos (ou renovamos) o teu website. Desenvolvemos a sua Webpage clara, rápida e otimizada para o Google — integrações prontas. Você paga o projeto, o site é seu.
          </motion.p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
              Quero o meu diagnóstico gratuito
            </Button>
            <Button variant="secondary" className="rounded-2xl" onClick={() => document.getElementById('como-funciona')?.scrollIntoView({behavior:'smooth'})}>
              Ver como funciona
            </Button>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Feito para você — Design e texto sob medida para ti.</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4"/>SEO já incluso — Otimizado para motores de busca.</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Métricas ativas — Acompanhe desde o primeiro dia.</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl border bg-neutral-50 shadow-sm"></div>
          <div className="absolute -bottom-6 -right-6 hidden w-40 rounded-xl border bg-white p-3 shadow md:block">
            <p className="text-xs text-neutral-500">SLA médio</p>
            <p className="text-2xl font-bold">&lt; 2h</p>
            <p className="text-xs text-neutral-500">resposta ao cliente</p>
          </div>
        </motion.div>
      </Container>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_50%_at_50%_0%,rgba(255,200,0,0.15),transparent)]" />
    </section>
  )
}

function Trust() {
  return (
    <section>
      <Container className="grid place-items-center gap-6 py-10">
        <p className="text-sm uppercase tracking-wide text-neutral-500">Integrado com as tuas ferramentas</p>
        <div className="grid w-full grid-cols-2 items-center gap-6 opacity-80 md:grid-cols-6">
          {['WhatsApp','Facebook','Instagram','Messenger','Email', 'Entre outros...'].map((brand) => (
            <div key={brand} className="grid place-items-center rounded-xl border p-4 text-sm">{brand}</div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ValueGrid() {
  const items = [
    { icon: Globe, title: 'Website moderno', desc: 'Design personalizado, SEO técnico e analytics prontos a usar.' },
    { icon: ShoppingCart, title: 'Layout que converte', desc: 'Fluido, upsell e aumento carrinho.' },
    { icon: Headphones, title: 'Atendimento humanizado', desc: 'Omnicanal: email, chat e redes sociais num só sítio.' },
  { icon: WhatsappIcon, title: 'Formulário + WhatsApp', desc: 'Formulário + WhatsApp já integrados.' },
    { icon: GitGraphIcon, title: 'Feito para crescer', desc: 'Pode começar pequeno e evoluir quando o seu negócio precisar' },
    { icon: Sparkles, title: 'Sem Mensalidades', desc: 'Você só paga uma vez; o site é seu.' },
  ]
  return (
    <section id="vantagens">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Tudo o que o teu e‑commerce precisa</h2>
          <p className="mt-2 text-neutral-600">Do primeiro pixel à última milha de entrega.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Diagnóstico gratuito', desc: 'Analisamos site, funil e operações.' },
    { title: 'Plano de acção', desc: 'Roadmap de UX, tech e integrações.' },
  { title: 'Implementação', desc: 'Design/dev + ligações a sistemas essenciais e canais.' },
    { title: 'Go‑live + Escala', desc: 'Testes, formação e automações com IA.' },
  ]

  return (
    <section id="como-funciona" className="bg-neutral-50">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Como funciona</h2>
          <p className="mt-2 text-neutral-600">Transparente do dia 1 ao go‑live.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader>
                <p className="text-sm text-neutral-500">Passo {i + 1}</p>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="rounded-2xl" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
            Quero iniciar o diagnóstico
          </Button>
        </div>
      </Container>
    </section>
  )
}

function Showcase() {
  return (
    <section>
      <Container className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Resultados que falam</h2>
            <p className="mt-2 text-neutral-600">Histórias reais de PME e nichos que escalaram com a Linke.</p>
          </div>
          <a href="#contacto" className="text-sm underline underline-offset-4" onClick={(e)=>{e.preventDefault();document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}}>Quero ser o próximo</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Marca #{i}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video w-full rounded-xl border bg-neutral-50" />
                <ul className="text-sm text-neutral-700">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4"/>+32% taxa de conversão</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4"/>−28% tickets pós‑venda</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Tempo de resposta &lt; 2h</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Plans() {
  const plans = [
  { name: 'Launch', price: 'Sob orçamento', features: ['Site vitrine/landing ou loja inicial','Setup de pagamentos e impostos','Integração básica com Linke (tracking + CS)'] },
  { name: 'Scale', price: 'Sob orçamento', features: ['Loja completa (Shopify/WooCommerce)','Checkout optimizado + upsell','Integrações essenciais (pagamentos, financeiro e social)','Automações com IA'], highlight: true },
    { name: 'Enterprise', price: 'Sob orçamento', features: ['Arquitectura headless / multi‑loja','SLA dedicado + segurança avançada','Relatórios e BI personalizados'] },
  ]
  return (
    <section id="planos" className="bg-neutral-50">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Planos à medida</h2>
          <p className="mt-2 text-neutral-600">Pagas pelo que precisas — crescemos contigo.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`rounded-2xl ${p.highlight ? 'border-amber-300 shadow' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span>{p.name}</span>
                  {p.highlight && (<span className="rounded-full border px-2 py-1 text-xs">Mais popular</span>)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-2xl font-bold">{p.price}</p>
                <ul className="space-y-2 text-neutral-700">
                  {p.features.map((f) => (<li key={f} className="flex items-center gap-2"><Check className="h-4 w-4"/>{f}</li>))}
                </ul>
                <Button className="mt-6 w-full rounded-2xl" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
                  Pedir proposta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const qa = [
    { q: 'Quanto tempo demora a entrega do website?', a: 'Depende do escopo. Landing pages: 2–4 semanas; lojas completas: 4–8 semanas, incluindo integrações e QA.' },
  { q: 'Trabalham com a minha plataforma?', a: 'Sim: Shopify, WooCommerce e arquitecturas headless. Integramos com sistemas financeiros e canais sociais.' },
    { q: 'A Linke também cuida do pós‑venda?', a: 'Sim. Centralizamos tracking, atendimento e relatórios. Reduzimos tickets e aumentamos satisfação.' },
    { q: 'Posso começar com algo pequeno?', a: 'Claro. Começa no plano Launch e faz upgrade quando precisares.' },
  ]
  return (
    <section id="faq">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
          <p className="mt-2 text-neutral-600">Transparência antes de começarmos.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {qa.map((item) => (
            <Card key={item.q} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{item.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Diagnóstico gratuito</h2>
          <p className="mt-2 text-neutral-600">Diz‑nos onde estás e para onde queres ir. Respondemos em 24–48h.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Fala connosco</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Nome" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Website (se existir)" />
              <Textarea placeholder="Descreve brevemente o projecto" />
              <Button className="w-full rounded-2xl">
                Enviar pedido <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
              <p className="text-xs text-neutral-500 flex items-center gap-2 mt-1"><Shield className="h-3 w-3"/>Usamos os teus dados apenas para responder ao teu pedido.</p>
            </CardContent>
          </Card>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">O que está incluído</h3>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Auditoria de UX e performance</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Mapa de integrações (pagamentos, financeiro e canais)</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Plano de quick wins para 30 dias</li>
            </ul>
            <div className="mt-6 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-600">
              Dica: comenta “WEBSITE” no nosso Instagram para desbloquear prioridade na agenda.
            </div>
          </div>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_70%_100%,rgba(255,200,0,0.12),transparent)]" />
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Linke. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#">Privacidade</a>
          <a className="hover:underline" href="#">Termos</a>
          <a className="hover:underline" href="#contacto" onClick={(e)=>{e.preventDefault();document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}}>Contacto</a>
        </div>
      </Container>
    </footer>
  )
}
