import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Send, Globe } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ap036776@gmail.com',
      link: 'mailto:ap036776@gmail.com',
      color: 'from-teal-400 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8917851095',
      link: 'tel:+918917851095',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: null,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/amitpal603', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/amit-pal-82b1a8271/', label: 'LinkedIn' },
    { icon: Twitter, link: 'https://x.com/PalAmit92585', label: 'Twitter' },
    { icon: Globe, link: '#', label: 'Website' }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-teal-500/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-500/10 blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-bold tracking-widest uppercase">
                Interaction
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                Let's <span className="text-teal-gradient">Connect.</span>
             </h1>
             <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Whether you have a question, a project idea, or just want to say hi, 
                I'm always open to new conversations.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Methods */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-teal-400/30 transition-all group flex items-center gap-8"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest">{item.title}</p>
                  {item.link ? (
                    <a href={item.link} className="text-xl md:text-2xl font-bold text-white hover:text-teal-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xl md:text-2xl font-bold text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass p-12 rounded-[3rem] border border-white/5 space-y-8">
              <h3 className="text-2xl font-black text-white tracking-tight">Social Ecosystem</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 glass border border-white/5 rounded-2xl text-gray-400 hover:text-teal-400 hover:border-teal-400/30 transition-all group"
                  >
                    <social.icon size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-bold text-xs uppercase tracking-widest">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Personal Message / Quick CTA */}
          <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-12 text-teal-400/10">
               <MessageSquare size={160} />
            </div>
            
            <div className="relative z-10 space-y-10">
               <div className="space-y-4">
                  <h2 className="text-3xl font-black text-white tracking-tight">Ready for a <br />New Chapter?</h2>
                  <div className="w-12 h-1 bg-teal-400 rounded-full" />
               </div>

               <p className="text-gray-400 text-lg leading-loose font-light">
                  I believe in the power of collaboration to create extraordinary results. 
                  My inbox is always open for bold ideas and innovative projects. 
                  Let's explore how we can build something impactful together.
               </p>

               <div className="pt-8 flex flex-col gap-4">
                  <a 
                    href="mailto:ap036776@gmail.com"
                    className="w-full py-5 bg-teal-400 hover:bg-teal-500 text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/20 flex items-center justify-center gap-3"
                  >
                    Start a Conversation <Send size={20} />
                  </a>
                  <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
                    Response time: ~24 hours
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

