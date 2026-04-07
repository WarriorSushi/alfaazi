import { useState } from 'react'
import {
  PenTool,
  Share2,
  BookOpen,
  Languages,
  Sparkles,
  Download,
  Layout,
  Heart,
  Users,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import { SHAYARI, TEMPLATES, FEATURES, PRICING } from './data'
import type { ShayariKey } from './data'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(TEMPLATES[0].id);
  const [activeShayari, setActiveShayari] = useState<ShayariKey>('ghalib1');
  const [scriptMode, setScriptMode] = useState<'urdu' | 'roman' | 'hindi'>('urdu');
  
  const currentTemplate = TEMPLATES.find(t => t.id === activeTemplate)!;
  const currentShayari = SHAYARI[activeShayari];

  // Poetry Design Studio preview
  const previewStyle = {
    background: currentTemplate.bg,
    color: currentTemplate.textColor,
    border: currentTemplate.borderStyle || 'none',
    fontFamily: currentTemplate.fontFamily,
    position: 'relative' as const,
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f0f0f2] font-sans selection:bg-[#d4a44c]/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#2a2a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0a0a0b] border border-[#2a2a2e] flex items-center justify-center">
                <span className="font-serif font-bold text-[#d4a44c] text-lg mt-[-2px]">ا</span>
              </div>
              <span className="font-serif text-xl tracking-tight">Alfaazi</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#features" className="text-[#8a8a96] hover:text-[#f0f0f2] transition-colors">Features</a>
              <a href="#studio" className="text-[#8a8a96] hover:text-[#f0f0f2] transition-colors">Studio</a>
              <a href="#pricing" className="text-[#8a8a96] hover:text-[#f0f0f2] transition-colors">Pricing</a>
              <button className="text-[#f0f0f2] hover:text-[#d4a44c] transition-colors">Sign In</button>
              <button className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#0a0a0b] font-medium px-4 py-2 rounded-md transition-colors">
                Start Creating
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#8a8a96] hover:text-[#f0f0f2]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-[#2a2a2e]/50">
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #14b8a6 0%, transparent 50%)' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1d] border border-[#2a2a2e] text-[#d4a44c] text-xs font-medium tracking-wide mb-8 animate-fade-up">
            <Sparkles size={14} />
            <span>The Professional Poetry Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight animate-fade-up stagger-1">
            <span className="block text-[#8a8a96] text-3xl md:text-4xl mb-2 font-urdu" dir="rtl">ہر لفظ ایک کہانی ہے</span>
            Design Poetry That <br/><span className="text-[#d4a44c]">Moves The Soul</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-[#8a8a96] max-w-2xl mx-auto animate-fade-up stagger-2 leading-relaxed">
            The first purpose-built studio for shayari creators. Write in any script, design with gorgeous Nastaliq typography, and share stunning visuals instantly.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
            <button className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#0a0a0b] text-base font-medium px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2">
              Open Studio <ChevronRight size={18} />
            </button>
            <button className="bg-[#1a1a1d] hover:bg-[#2a2a2e] border border-[#2a2a2e] text-[#f0f0f2] text-base font-medium px-8 py-3 rounded-md transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Studio Demo */}
      <section id="studio" className="py-24 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Try The Studio</h2>
            <p className="text-[#8a8a96]">Experience true Nastaliq rendering and poetry-first design templates in real-time.</p>
          </div>

          <div className="bg-[#111113] rounded-xl border border-[#2a2a2e] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            {/* Editor Panel */}
            <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-[#2a2a2e] flex flex-col">
              <div className="p-4 border-b border-[#2a2a2e] bg-[#1a1a1d] flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/50"></div>
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/50"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/20 border border-[#10b981]/50"></div>
                </div>
                <div className="text-xs font-mono text-[#8a8a96]">editor.alfaazi.com</div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col gap-6 overflow-y-auto">
                {/* Script Selector */}
                <div>
                  <label className="text-xs text-[#8a8a96] uppercase tracking-wider mb-2 block">Display Script</label>
                  <div className="flex bg-[#0a0a0b] p-1 rounded-md border border-[#2a2a2e]">
                    <button 
                      onClick={() => setScriptMode('urdu')}
                      className={`flex-1 py-1.5 text-sm rounded transition-colors ${scriptMode === 'urdu' ? 'bg-[#1a1a1d] text-[#14b8a6] border border-[#2a2a2e]' : 'text-[#8a8a96] hover:text-[#f0f0f2]'}`}
                    >
                      Urdu
                    </button>
                    <button 
                      onClick={() => setScriptMode('roman')}
                      className={`flex-1 py-1.5 text-sm rounded transition-colors ${scriptMode === 'roman' ? 'bg-[#1a1a1d] text-[#14b8a6] border border-[#2a2a2e]' : 'text-[#8a8a96] hover:text-[#f0f0f2]'}`}
                    >
                      Roman
                    </button>
                    <button 
                      onClick={() => setScriptMode('hindi')}
                      className={`flex-1 py-1.5 text-sm rounded transition-colors ${scriptMode === 'hindi' ? 'bg-[#1a1a1d] text-[#14b8a6] border border-[#2a2a2e]' : 'text-[#8a8a96] hover:text-[#f0f0f2]'}`}
                    >
                      Hindi
                    </button>
                  </div>
                </div>

                {/* Poem Selector (Mocking typing) */}
                <div>
                  <label className="text-xs text-[#8a8a96] uppercase tracking-wider mb-2 block">Select Verse</label>
                  <select 
                    value={activeShayari}
                    onChange={(e) => setActiveShayari(e.target.value as ShayariKey)}
                    className="w-full bg-[#0a0a0b] border border-[#2a2a2e] text-[#f0f0f2] text-sm rounded-md p-2.5 focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6] outline-none"
                  >
                    {(Object.keys(SHAYARI) as ShayariKey[]).map(key => (
                      <option key={key} value={key}>{SHAYARI[key].poet} - {SHAYARI[key].theme}</option>
                    ))}
                  </select>
                </div>

                {/* Template Selector */}
                <div>
                  <label className="text-xs text-[#8a8a96] uppercase tracking-wider mb-2 block">Design Template</label>
                  <div className="grid grid-cols-2 gap-2">
                    {TEMPLATES.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setActiveTemplate(t.id)}
                        className={`text-left p-2 rounded border text-sm transition-colors ${
                          activeTemplate === t.id 
                            ? 'bg-[#1a1a1d] border-[#14b8a6] text-[#f0f0f2]' 
                            : 'bg-[#0a0a0b] border-[#2a2a2e] text-[#8a8a96] hover:border-[#3a3a40]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full border border-[#3a3a40]" style={{ background: t.bg }}></div>
                          <span className="truncate">{t.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <button className="w-full bg-[#f0f0f2] hover:bg-white text-[#0a0a0b] font-medium py-2.5 rounded-md transition-colors flex items-center justify-center gap-2">
                    <Download size={18} /> Export Image
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="w-full lg:w-2/3 bg-[#050505] p-8 lg:p-12 flex items-center justify-center min-h-[500px]">
              
              {/* Canvas element */}
              <div 
                className="w-full max-w-[400px] aspect-[4/5] rounded shadow-2xl transition-all duration-500 overflow-hidden relative flex flex-col items-center justify-center p-8 text-center"
                style={previewStyle}
              >
                {currentTemplate.overlay && (
                  <div className="absolute inset-0 pointer-events-none" style={{ background: currentTemplate.overlay }}></div>
                )}
                
                <div className="relative z-10 w-full">
                  <p 
                    className={`${scriptMode === 'urdu' ? 'urdu-text text-3xl lg:text-4xl leading-[2.5]' : scriptMode === 'hindi' ? 'text-2xl lg:text-3xl leading-[1.8] font-medium' : 'text-xl lg:text-2xl leading-[1.8] italic'}`}
                    style={{ color: currentTemplate.textColor }}
                    dir={scriptMode === 'urdu' ? 'rtl' : 'ltr'}
                  >
                    {currentShayari[scriptMode].split('\n').map((line, i) => (
                      <span key={i} className="block mb-2">{line}</span>
                    ))}
                  </p>
                  
                  <div className="mt-8 flex flex-col items-center gap-2">
                    <div className="w-8 h-[1px] opacity-50" style={{ background: currentTemplate.poetColor }}></div>
                    <p 
                      className="text-sm tracking-widest uppercase"
                      style={{ color: currentTemplate.poetColor, fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {currentShayari.poet}
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-40">
                  <span className="text-[10px] tracking-widest font-mono">alfaazi.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#0a0a0b] border-t border-[#2a2a2e]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Crafted for Creators</h2>
            <p className="text-[#8a8a96] text-lg">Stop fighting with generic design tools. Alfaazi is built specifically for the nuances of South Asian poetry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = {
                'pen-tool': PenTool,
                'layout': Layout,
                'languages': Languages,
                'book-open': BookOpen,
                'share-2': Share2,
                'users': Users
              }[feature.icon as string] || PenTool;

              return (
                <div key={i} className="bg-[#111113] border border-[#2a2a2e] rounded-xl p-8 hover:border-[#3a3a40] transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[#1a1a1d] border border-[#2a2a2e] flex items-center justify-center text-[#14b8a6] mb-6 group-hover:scale-110 group-hover:text-[#d4a44c] transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-[#f0f0f2]">{feature.title}</h3>
                  <p className="text-[#8a8a96] mb-4">{feature.description}</p>
                  <p className="text-sm text-[#5a5a66] border-t border-[#2a2a2e] pt-4 mt-auto">
                    {feature.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#111113] border-t border-[#2a2a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Simple Pricing</h2>
            <p className="text-[#8a8a96]">Start free, upgrade when you need professional features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((plan, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-8 flex flex-col relative ${
                  plan.highlighted 
                    ? 'bg-[#1a1a1d] border border-[#14b8a6] shadow-[0_0_30px_rgba(20,184,166,0.1)]' 
                    : 'bg-[#0a0a0b] border border-[#2a2a2e]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#14b8a6] text-[#0a0a0b] text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                  <span className="font-urdu text-xl text-[#8a8a96]" dir="rtl">{plan.urdu}</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-serif">{plan.price}</span>
                  <span className="text-[#8a8a96]">{plan.period}</span>
                </div>
                
                <p className="text-[#8a8a96] text-sm mb-8 pb-8 border-b border-[#2a2a2e]">{plan.description}</p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#f0f0f2]">
                      <Sparkles size={16} className={plan.highlighted ? 'text-[#14b8a6]' : 'text-[#5a5a66]'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-[#14b8a6] hover:bg-[#0d9488] text-[#0a0a0b]'
                      : 'bg-[#1a1a1d] hover:bg-[#2a2a2e] border border-[#2a2a2e] text-[#f0f0f2]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0b] border-t border-[#2a2a2e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#1a1a1d] border border-[#2a2a2e] flex items-center justify-center">
              <span className="font-serif font-bold text-[#d4a44c] text-sm mt-[-1px]">ا</span>
            </div>
            <span className="font-serif text-lg tracking-tight">Alfaazi</span>
          </div>
          
          <p className="text-[#5a5a66] text-sm text-center md:text-left">
            © 2026 Alfaazi Studio. Built for the love of poetry.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-[#8a8a96] hover:text-[#f0f0f2] transition-colors"><Heart size={20} /></a>
            <a href="#" className="text-[#8a8a96] hover:text-[#f0f0f2] transition-colors">X/Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
