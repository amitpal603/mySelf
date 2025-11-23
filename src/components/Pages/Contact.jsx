import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ap036776@gmail.com',
      link: 'mailto:ap036776@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8917851095',
      link: 'tel:+918917851095'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/amitpal603', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/amit-pal-82b1a8271/', label: 'LinkedIn' },
    { icon: Twitter, link: 'https://x.com/PalAmit92585', label: 'Twitter' }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-cyan-950 to-black'>
      {/* Hero Section */}
      <div className='relative overflow-hidden pt-32 pb-20'>
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Get In <span className='bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent'>Touch</span>
            </h1>
            <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-8'></div>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className='bg-gray-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'
                >
                  <div className='flex flex-col items-center text-center'>
                    <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center mb-4'>
                      <Icon className='w-8 h-8 text-black' />
                    </div>
                    <h3 className='text-lg font-semibold text-white mb-2'>{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className='text-cyan-400 hover:text-cyan-300 transition-colors'>
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-gray-300'>{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Info Section */}
            <div className='space-y-8'>
              {/* Personal Info Card */}
              <div className='bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20'>
                <h2 className='text-3xl font-bold text-white mb-6'>Amit Pal</h2>
                <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                  Full Stack Developer passionate about creating innovative web solutions. 
                  Let's work together to bring your ideas to life!
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <div className='w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center'>
                      <Mail className='w-5 h-5 text-cyan-400' />
                    </div>
                    <a href='mailto:ap036776@gmail.com' className='hover:text-cyan-400 transition-colors'>
                      ap036776@gmail.com
                    </a>
                  </div>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <div className='w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center'>
                      <Phone className='w-5 h-5 text-cyan-400' />
                    </div>
                    <a href='tel:+918917851095' className='hover:text-cyan-400 transition-colors'>
                      +91 8917851095
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20'>
                <h3 className='text-2xl font-bold text-white mb-6'>Connect With Me</h3>
                <div className='grid grid-cols-2 gap-4'>
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-200 group'
                      >
                        <Icon className='w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform' />
                        <span className='text-gray-300 group-hover:text-white transition-colors'>
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
