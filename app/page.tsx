"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../linke-landing-websites/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../linke-landing-websites/src/components/ui/card'
import { Input } from '../linke-landing-websites/src/components/ui/input'
import { Textarea } from '../linke-landing-websites/src/components/ui/textarea'
import { Check, Globe, ShoppingCart, Headphones, LineChart, Sparkles, ArrowRight, Shield } from 'lucide-react'

export default function Page() {
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
            Um site só — sem mensalidades.
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Desenvolvemos a sua landing page clara, rápida e otimizada para o Google — integrações prontas. Você paga o projeto, o site é seu.
          </motion.p>

          <div className="mt-6 grid w-full gap-3 sm:flex sm:flex-row sm:items-center">
            <Button className="rounded-2xl w-full py-3 sm:w-auto" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
              Peça o diagnóstico grátis
            </Button>
            <Button variant="secondary" className="rounded-2xl w-full py-3 sm:w-auto" onClick={() => document.getElementById('como-funciona')?.scrollIntoView({behavior:'smooth'})}>
              Ver como fazemos
            </Button>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Entrega em ~7-14 dias</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4"/>SEO básico: títulos, meta, sitemap, Google Business</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Integrações: WhatsApp, e-mail e métricas (GA4 / Pixel)</li>
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
        </motion.div>
      </Container>
    </section>
  )
}

function Trust() {
  return (
    <section>
      <Container className="grid place-items-center gap-6 py-10">
        <p className="text-sm uppercase tracking-wide text-neutral-500">Funciona com o que você já usa</p>
        <p className="text-center text-sm text-neutral-600">Shopify, WooCommerce, Facebook, Instagram, WhatsApp, Google.</p>
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center opacity-90">
          {['Shopify','WooCommerce','Facebook','Instagram','WhatsApp','Google'].map((brand) => (
            <div key={brand} className="grid place-items-center rounded-xl border p-4 text-sm">{brand}</div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ValueGrid() {
  const items = [
    { icon: Check, title: 'Sem mensalidades', desc: 'Você só paga uma vez; o site é seu.' },
    { icon: Globe, title: 'Feito para você', desc: 'Design e texto sob medida para o seu negócio.' },
    { icon: LineChart, title: 'SEO já incluso', desc: 'Otimizado para motores de busca desde o lançamento.' },
    { icon: Sparkles, title: 'Lançamento rápido', desc: 'Estrutura pronta para gerar resultados.' },
    { icon: Headphones, title: 'Contatos conectados', desc: 'Formulário + WhatsApp já integrados.' },
    { icon: ShoppingCart, title: 'Métricas ativas', desc: 'Acompanhe com GA4 e Pixel desde o primeiro dia.' },
  ]

  return (
    <section id="vantagens">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Nosso valor</h2>
          <p className="mt-2 text-neutral-600">O que entregamos para o seu negócio — com clareza e foco em resultados.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
    { title: 'Diagnóstico gratuito', desc: 'Conversamos para conhecer seu negócio.' },
    { title: 'Plano de ação', desc: 'Você aprova estrutura, copy e layout.' },
    { title: 'Construção', desc: 'Implementamos tudo e deixamos pronto para funcionar.' },
    { title: 'Go-live', desc: 'Publicamos, passamos instruções e podemos dar suporte.' },
  ]

  return (
    <section id="como-funciona" className="bg-neutral-50">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Como funciona</h2>
          <p className="mt-2 text-neutral-600">Transparente do dia 1 ao go-live.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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
          <Button className="rounded-2xl w-full sm:w-auto py-3" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}>
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
            <h2 className="text-3xl font-bold">Resultados que fazem diferença</h2>
            <p className="mt-2 text-neutral-600">Mais leads com uma mensagem simples e clara</p>
          </div>
          <a href="#contacto" className="text-sm underline underline-offset-4" onClick={(e)=>{e.preventDefault();document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}}>Quero ser o próximo</a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Marca #{i}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video w-full rounded-xl border bg-neutral-50" />
                <ul className="text-sm text-neutral-700">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4"/>+32% de conversão</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Tempo de carga &lt; 2s</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4"/>Mais contactos via WhatsApp / formulário</li>
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
    {
      name: 'Starter Landing',
      features: [
        'Página única (hero, benefícios, contacto)',
        'Copy e design personalizados',
        'Formulário / WhatsApp integrado',
        'GA4 / Pixel',
        'SEO básico',
      ],
      delivery: '7-14 dias',
    },
    {
      name: 'Pro Landing',
      features: [
        'Tudo do Starter',
        'Prova social e FAQ',
        'Otimização de desempenho',
        'Até 2 revisões',
      ],
      delivery: '7-14 dias',
      highlight: true,
    },
  ]

  const addons = [
    'SEO Local Plus (schema, GBP)',
    'Sessão de fotos',
    'Suporte sob demanda',
  ]

  return (
    <section id="planos" className="bg-neutral-50">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Planos (sem mensalidades)</h2>
          <p className="mt-2 text-neutral-600">Pagas pelo projeto e o site é teu.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {plans.map((p) => (
            <Card key={p.name} className={`rounded-2xl ${p.highlight ? 'border-amber-300 shadow' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span>{p.name}</span>
                  {p.highlight && (<span className="rounded-full border px-2 py-1 text-xs">Mais popular</span>)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-2xl font-bold">{p.delivery}</p>
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

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Add-ons (opcionais)</h3>
          <ul className="mt-2 space-y-2 text-neutral-700">
            {addons.map((a) => (<li key={a} className="flex items-center gap-2"><Check className="h-4 w-4"/>{a}</li>))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const qa = [
    { q: 'Há mensalidades?', a: 'Não — você paga o projeto e fica com o site.' },
    { q: 'Quanto tempo demora?', a: 'Entre 7 e 14 dias para uma landing simples (dependendo dos conteúdos).' },
    { q: 'Inclui SEO?', a: 'Sim — SEO básico: metas, headings, sitemap/robots, performance e Google Business.' },
    { q: 'Integram WhatsApp?', a: 'Sim — WhatsApp, e-mail e métricas ficam ligados.' },
    { q: 'Preciso de manutenção?', a: 'Opcional — por horas, quando precisar (sem mensalidades).' },
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
          <p className="mt-2 text-neutral-600">Diga-nos onde quer chegar. Respondemos em 24-48 h.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Fala connosco</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Nome" />
              <Input placeholder="E-mail" type="email" />
              <Input placeholder="Setor" />
              <Input placeholder="Objetivo da página" />
              <Input placeholder="Contacto preferido (WhatsApp / E-mail)" />
              <Textarea placeholder="Descreve brevemente o projecto" />
              <Button className="w-full rounded-2xl py-3">
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
          </div>
        </div>
      </Container>
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
