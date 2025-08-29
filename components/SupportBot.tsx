"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

/** ----- CONFIG ----- */
const BOT_IMG = "assets/bot.png"; 

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const SECTIONS: Section[] = [
  {
    title: "Création de site web",
    items: [
      {
        q: "Création de site vitrine / e-commerce",
        a: "Nous concevons des sites rapides, SEO-friendly (Next.js + Tailwind), avec paiement, catalogue, formulaires, et hébergement managé. Démo et devis gratuits.",
      },
      {
        q: "Délais de réalisation",
        a: "Vitrine: 1–3 semaines selon contenus. E-commerce: 3–6 semaines (produits, paiements, intégrations). Planning précis fourni au kick-off.",
      },
      {
        q: "Maintenance & évolutions",
        a: "TMA au forfait ou à la demande: mises à jour, correctifs, nouvelles pages, optimisations Core Web Vitals.",
      },
    ],
  },
  {
    title: "IA & Automatisation",
    items: [
      {
        q: "Comment créez-vous un site avec IA (chatbot, recherche, recommandations) ?",
        a: "Architecture RAG (base de connaissances + embeddings) ou fine-tuning selon le besoin, intégrée à Next.js (API Routes/Edge). UI en React + Tailwind, stockage de données (PostgreSQL/Vector DB), et déploiement sur Vercel/Azure.",
      },
      {
        q: "Quels modèles d’IA utilisez-vous ?",
        a: "OpenAI, Claude, ou Llama-3/4 via fournisseurs adaptés. Choix selon langue, coût, latence, conformité, et personnalisation (RAG vs fine-tuning).",
      },
      {
        q: "Automatisations possibles pour mon business ?",
        a: "Réponses clients 24/7 (site/WhatsApp), génération de contenus produits, tri des leads, extraction de documents (OCR), e-mails et factures, synchronisation CRM/ERP via Zapier/Make/Workflows maison.",
      },
      {
        q: "Coûts & délais pour une fonctionnalité IA ?",
        a: "MVP chatbot/RAG: 1–2 semaines. Abonnement modèle + hébergement calculé à l’usage (tokens/req). Chiffrage transparent avant démarrage.",
      },
      {
        q: "Sécurité & confidentialité",
        a: "Données chiffrées en transit/au repos, logs anonymisés, cloisonnement par client, et contrôle d’accès (SSO/MFA). Aucune réutilisation de vos données sans accord.",
      },
    ],
  },
  {
    title: "Identité & sécurité",
    items: [
      {
        q: "Gestion des identités",
        a: "Mise en place SSO (Google/Microsoft), MFA, gestion des accès, et audits de permissions.",
      },
      {
        q: "Cybersécurité",
        a: "Durcissement serveurs, WAF/CDN, sauvegardes, tests basiques d'intrusion et plans de reprise.",
      },
    ],
  },
  {
    title: "Cloud (infonuagique)",
    items: [
      {
        q: "Hébergement & déploiement",
        a: "Cloud managé (Vercel/Azure/AWS): CI/CD, monitoring, alertes, et coût maîtrisé selon trafic.",
      },
      {
        q: "Migrations",
        a: "On migre vos applis / BDD vers le cloud avec zéro interruption planifiée (fenêtre de bascule).",
      },
    ],
  },
  {
    title: "Support & Assistance",
    items: [
      { q: "Support technique", a: "SLA selon contrat (heures ouvrées ou 24/7). Canal: email, WhatsApp, ou portail clients." },
      { q: "Contact / Devis", a: "Envoyez votre besoin sur contact@digicombi.com ou via la page Contact. Réponse < 24h ouvrées." },
    ],
  },
  {
    title: "Général",
    items: [
      {
        q: "Qui sommes-nous ?",
        a: "DigiCombi, partenaire digital: création de sites, IA & automatisation, identité, cybersécurité, cloud et support. Proximité, expertise, confiance.",
      },
      {
        q: "Processus de projet",
        a: "1) Découverte 2) Devis 3) Design/maquettes 4) Dev 5) Recette 6) Mise en ligne 7) Support/SEO/Ads.",
      },
    ],
  },
];


/** ----- TYPES & UTILS ----- */
type Message = { role: "user" | "bot"; text: string; time: number; id: string };
const LS_KEY = "support-bot-choice";

/** ----- COMPONENT ----- */
export default function SupportBotChoice() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(LS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [expanded, setExpanded] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(messages));
  }, [messages]);

  // Close with Esc / outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const welcome = useMemo(
    () =>
      ({
        role: "bot",
        text: "Bonjour 👋 Je suis l'assistant DigiCombi. Comment puis-je vous aider aujourd'hui ?",
        time: Date.now(),
        id: Math.random().toString(36).substring(7),
      }) as Message,
    []
  );

  const list = messages.length ? messages : [welcome];

  // Filter questions based on search term
  const filteredSections = useMemo(() => {
    if (!searchTerm) return SECTIONS;
    
    return SECTIONS.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.items.length > 0);
  }, [searchTerm]);

  function ask(q: string, a: string) {
    const now = Date.now();
    const userMessageId = Math.random().toString(36).substring(7);
    const botMessageId = Math.random().toString(36).substring(7);
    
    setMessages(prev => [
      ...prev,
      { role: "user", text: q, time: now, id: userMessageId },
    ]);
    
    setIsTyping(true);
    
    // Simulate typing delay for more natural interaction
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { role: "bot", text: a, time: now + 1, id: botMessageId },
      ]);
    }, 800);
  }

  function clearChat() {
    setMessages([]);
    localStorage.removeItem(LS_KEY);
  }

  return (
    <>
      {/* FLOATING BUTTON with animation */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Ouvrir le support DigiCombi"
        className="fixed cursor-pointer bottom-6 right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse"
      >
        <img
          src={BOT_IMG}
          alt="Bot DigiCombi"
          className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
        />
        {!open && (
          <div className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 bg-red-500 rounded-full animate-ping"></div>
        )}
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div
          ref={panelRef}
          className="fixed inset-0 md:inset-auto md:bottom-28 md:right-6 z-50 w-full h-full md:w-[95vw] md:max-w-md md:h-[800px] md:rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden flex flex-col backdrop-blur-sm bg-white/95"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white">
            <div className="flex items-center gap-3">
              <img
                src={BOT_IMG}
                alt="Bot"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover bg-white ring-2 ring-white/50"
              />
              <div>
                <div className="text-sm font-semibold">Assistant DigiCombi</div>
                <div className="text-xs text-white/80">En ligne • Réponse instantanée</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={clearChat} className="text-xs text-white/80 hover:text-white underline" title="Effacer la conversation cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button onClick={() => setOpen(false)} aria-label="Fermer" className="p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
            {list.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${m.role === "user" ? "bg-blue-600 text-white rounded-br-md" : "bg-gray-100 text-gray-900 rounded-bl-md"}`}>
                  {m.text}
                  <div className={`text-xs mt-1 ${m.role === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {new Date(m.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-gray-100 text-gray-900 rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Search bar */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pr-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Sections / clickable questions */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Questions fréquentes</h3>
              <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-2`}>
                {SECTIONS.slice(0, isMobile ? 6 : 4).map(s => (
                  <button
                    key={s.title}
                    onClick={() => setExpanded(prev => (prev === s.title ? null : s.title))}
                    className={`text-xs px-3 py-2 rounded-full border transition-all ${expanded === s.title ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent" : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"}`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {filteredSections.map(section => (
              <div key={section.title} className={`${expanded === section.title ? "block" : "hidden"}`}>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{section.title}</h4>
                <div className="space-y-2">
                  {section.items.map((it, idx) => (
                    <button
                      key={idx}
                      onClick={() => ask(it.q, it.a)}
                      className="w-full text-left text-sm rounded-xl border border-gray-200 bg-white hover:bg-gray-50 px-4 py-3 leading-relaxed transition-all dark:text-black hover:shadow-sm hover:border-blue-300"
                    >
                      {it.q}
                    </button>
                  ))}
                </div>
                <div className="my-3 border-t border-gray-200" />
              </div>
            ))}

            {filteredSections.length === 0 && (
              <div className="text-center py-6 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Aucun résultat trouvé pour "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}