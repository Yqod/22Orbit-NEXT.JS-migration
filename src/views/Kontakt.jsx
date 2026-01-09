"use client";

import React, { useState, useRef, useCallback } from "react";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import DOMPurify from 'dompurify';
import FooterLegal from "../components/FooterLegal";

const Kontakt = () => {
    useEffect(() => {
        // Warte bis die Komponente vollständig gerendert ist
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        });
    }, []);

    const [honeypot, setHoneypot] = useState('');

    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_company: '',
        user_phone: '',
        project_type: '',
        timeline: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [lastSubmit, setLastSubmit] = useState(0);
    const [validationErrors, setValidationErrors] = useState({});

    // Input-Validierung
    const validateInput = useCallback((name, value) => {
        const errors = {};
        
        switch (name) {
            case 'user_name':
                if (!value.trim()) errors.user_name = 'Name ist erforderlich';
                else if (value.trim().length < 2) errors.user_name = 'Name muss mindestens 2 Zeichen haben';
                else if (value.trim().length > 50) errors.user_name = 'Name darf maximal 50 Zeichen haben';
                break;
                
            case 'user_email':
                { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) errors.user_email = 'E-Mail ist erforderlich';
                else if (!emailRegex.test(value)) errors.user_email = 'Ungültige E-Mail-Adresse';
                break; }
                
            case 'user_phone':
                if (value && !/^[+]?[0-9\s\-()]{7,20}$/.test(value.trim())) {
                    errors.user_phone = 'Ungültige Telefonnummer';
                }
                break;
                
            case 'message':
                if (!value.trim()) errors.message = 'Nachricht ist erforderlich';
                else if (value.trim().length < 10) errors.message = 'Nachricht muss mindestens 10 Zeichen haben';
                else if (value.trim().length > 2000) errors.message = 'Nachricht darf maximal 2000 Zeichen haben';
                break;
                
            case 'project_type':
                if (!value.trim()) errors.project_type = 'Projekt-Art ist erforderlich';
                break;
        }
        
        return errors;
    }, []);

    // Sichere Input-Behandlung
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        
        // Input-Sanitization mit DOMPurify
        const sanitizedValue = DOMPurify.sanitize(value, {
            ALLOWED_TAGS: [],
            ALLOWED_ATTR: []
        });
        
        // Validierung
        const errors = validateInput(name, sanitizedValue);
        setValidationErrors(prev => ({
            ...prev,
            [name]: errors[name] || null
        }));
        
        setFormData(prev => ({
            ...prev,
            [name]: sanitizedValue
        }));
    }, [validateInput]);

    // Rate Limiting & sichere E-Mail-Sendung
    const sendEmail = useCallback((e) => {
        e.preventDefault();


        // Honeypot-Check (Bot-Erkennung)
        if (honeypot) {
            console.log('Bot detected! Honeypot filled:', honeypot);
            setSubmitStatus('error'); // Stille Ablehnung
            return;
        }

        
        // Rate Limiting (30 Sekunden zwischen Anfragen)
        const now = Date.now();
        if (now - lastSubmit < 30000) {
            setSubmitStatus('rate_limit');
            return;
        }
        
        // Vollständige Validierung vor dem Senden
        const allErrors = {};
        Object.keys(formData).forEach(key => {
            const fieldErrors = validateInput(key, formData[key]);
            if (fieldErrors[key]) allErrors[key] = fieldErrors[key];
        });
        
        if (Object.keys(allErrors).length > 0) {
            setValidationErrors(allErrors);
            return;
        }
        
        setIsSubmitting(true);
        setLastSubmit(now);

        // Verwende Umgebungsvariablen für EmailJS
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_liuqe88',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_g72mffv',
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '1ORBuEvNYVGE3c6wv'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');
            setFormData({
                user_name: '', user_email: '', user_company: '', user_phone: '', 
                project_type: '', timeline: '', message: ''
            });
            setValidationErrors({});
        })
        .catch((error) => {
            console.error('Email sending failed:', error.text);
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    }, [formData, lastSubmit, validateInput, honeypot]);

    const projectTypes = [
        'Landing Page',
        'Online Shop',
        'Web Application',
        'Mobile App',
        'Custom Software',
        'Beratung',
        'Wartung/Support',
        'Sonstiges'
    ];

    const timelines = [
        'Sofort',
        'In den nächsten 4 Wochen',
        'In 2-3 Monaten',
        'In 6 Monaten',
        'Noch unklar'
    ];

    // Rate Limit Status
    if (submitStatus === 'rate_limit') {
        return (
            <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
                <div className="w-full max-w-2xl mx-auto text-center">
                    <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-12 border border-orange-500/30">
                        <div className="text-6xl text-orange-400 mb-6">⏳</div>
                        <h2 className="font-bebas text-3xl sm:text-4xl text-[#f0ebd8] mb-4 tracking-wide">
                            Bitte warten
                        </h2>
                        <p className="text-[#748cab] text-lg mb-8">
                            Zu viele Anfragen in kurzer Zeit. Bitte warte 30 Sekunden bevor du es erneut versuchst.
                        </p>
                        <button
                            onClick={() => setSubmitStatus(null)}
                            className="bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                        >
                            Zurück zum Formular
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    // Success Status
    if (submitStatus === 'success') {
        return (
            <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
                <div className="w-full max-w-2xl mx-auto text-center">
                    <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-12 border border-[#748cab]/30">
                        <div className="text-6xl text-green-400 mb-6">✓</div>
                        <h2 className="font-bebas text-3xl sm:text-4xl text-[#f0ebd8] mb-4 tracking-wide">
                            Nachricht gesendet!
                        </h2>
                        <p className="text-[#748cab] text-lg mb-8">
                            Danke für deine Anfrage! Wir melden uns innerhalb von 24 Stunden bei dir zurück.
                        </p>
                        <button
                            onClick={() => setSubmitStatus(null)}
                            className="bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                        >
                            Neue Nachricht senden
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    // Error Status
    if (submitStatus === 'error') {
        return (
            <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
                <div className="w-full max-w-2xl mx-auto text-center">
                    <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-12 border border-red-500/30">
                        <div className="text-6xl text-red-400 mb-6">⚠</div>
                        <h2 className="font-bebas text-3xl sm:text-4xl text-[#f0ebd8] mb-4 tracking-wide">
                            Fehler beim Senden
                        </h2>
                        <p className="text-[#748cab] text-lg mb-8">
                            Entschuldige, beim Senden ist ein Fehler aufgetreten. Versuche es erneut oder schreib uns direkt eine E-Mail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setSubmitStatus(null)}
                                className="bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                            >
                                Erneut versuchen
                            </button>
                            <a
                                href="mailto:info@22orbit.de"
                                rel="noopener noreferrer"
                                className="bg-[#3e5c76]/20 border-2 border-[#748cab]/50 text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:bg-[#3e5c76]/40 transition-all duration-300"
                            >
                                Direkt E-Mail senden
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-b from-[#1d2d44] to-[#0d1321] py-28 sm:py-28 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
                            Kontakt
                        </h1>
                        <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto">
                            Bereit für dein nächstes digitales Projekt? Lass uns darüber sprechen!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Contact Form */}
                        <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#748cab]/30">
                            <h2 className="font-bebas text-2xl text-[#f0ebd8] mb-8 tracking-wide">
                                Projekt anfragen
                            </h2>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6" noValidate>
                                {/* Basic Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            required
                                            maxLength="50"
                                            autoComplete="name"
                                            className={`w-full bg-[#1d2d44]/50 border rounded-xl px-4 py-3 text-[#f0ebd8] focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                validationErrors.user_name 
                                                    ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' 
                                                    : 'border-[#748cab]/30 focus:border-[#748cab]/60 focus:ring-[#748cab]/20'
                                            }`}
                                            placeholder="Dein Name"
                                        />
                                        {validationErrors.user_name && (
                                            <p className="text-red-400 text-sm mt-1">{validationErrors.user_name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleChange}
                                            required
                                            autoComplete="email"
                                            className={`w-full bg-[#1d2d44]/50 border rounded-xl px-4 py-3 text-[#f0ebd8] focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                validationErrors.user_email 
                                                    ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' 
                                                    : 'border-[#748cab]/30 focus:border-[#748cab]/60 focus:ring-[#748cab]/20'
                                            }`}
                                            placeholder="deine@email.de"
                                        />
                                        {validationErrors.user_email && (
                                            <p className="text-red-400 text-sm mt-1">{validationErrors.user_email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                            Unternehmen
                                        </label>
                                        <input
                                            type="text"
                                            name="user_company"
                                            value={formData.user_company}
                                            onChange={handleChange}
                                            maxLength="100"
                                            autoComplete="organization"
                                            className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                            placeholder="Dein Unternehmen (optional)"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            value={formData.user_phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            className={`w-full bg-[#1d2d44]/50 border rounded-xl px-4 py-3 text-[#f0ebd8] focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                validationErrors.user_phone 
                                                    ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' 
                                                    : 'border-[#748cab]/30 focus:border-[#748cab]/60 focus:ring-[#748cab]/20'
                                            }`}
                                            placeholder="Für Rückfragen (optional)"
                                        />
                                        {validationErrors.user_phone && (
                                            <p className="text-red-400 text-sm mt-1">{validationErrors.user_phone}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Honeypot Field - UNSICHTBAR für Menschen */}
                                    <div className="hidden" aria-hidden="true">
                                        <label htmlFor="website">Website (do not fill out)</label>
                                        <input
                                            type="text"
                                            id="website"
                                            name="website"
                                            value={honeypot}
                                            onChange={(e) => setHoneypot(e.target.value)}
                                            tabIndex="-1"
                                            autoComplete="off"
                                        />
                                    </div>


                                {/* Project Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                            Projekt Art *
                                        </label>
                                        <select
                                            name="project_type"
                                            value={formData.project_type}
                                            onChange={handleChange}
                                            required
                                            className={`w-full bg-[#1d2d44]/50 border rounded-xl px-4 py-3 text-[#f0ebd8] focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                validationErrors.project_type 
                                                    ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' 
                                                    : 'border-[#748cab]/30 focus:border-[#748cab]/60 focus:ring-[#748cab]/20'
                                            }`}
                                        >
                                            <option value="">Wählen...</option>
                                            {projectTypes.map((type, index) => (
                                                <option key={index} value={type} className="bg-[#1d2d44]">
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                        {validationErrors.project_type && (
                                            <p className="text-red-400 text-sm mt-1">{validationErrors.project_type}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                            Zeitrahmen
                                        </label>
                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                        >
                                            <option value="">Wählen...</option>
                                            {timelines.map((time, index) => (
                                                <option key={index} value={time} className="bg-[#1d2d44]">
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                        Dein Projekt * <span className="text-sm text-[#748cab]">({formData.message.length}/2000)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        maxLength="2000"
                                        className={`w-full bg-[#1d2d44]/50 border rounded-xl px-4 py-3 text-[#f0ebd8] focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                                            validationErrors.message 
                                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' 
                                                : 'border-[#748cab]/30 focus:border-[#748cab]/60 focus:ring-[#748cab]/20'
                                        }`}
                                        placeholder="Erzähl uns von deinem Projekt! Was möchtest du erreichen? Welche Features brauchst du? Je detaillierter, desto besser können wir dir helfen."
                                    ></textarea>
                                    {validationErrors.message && (
                                        <p className="text-red-400 text-sm mt-1">{validationErrors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`inline-flex items-center justify-center bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-xl px-12 py-5 rounded-full shadow-xl tracking-widest transition-all duration-300 ${
                                            isSubmitting
                                                ? 'opacity-70 cursor-not-allowed'
                                                : 'hover:scale-105 hover:shadow-2xl'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#f0ebd8] mr-3"></div>
                                                Wird gesendet...
                                            </>
                                        ) : (
                                            <>
                                                🚀 Nachricht senden
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-[#748cab] text-sm text-center">
                                    Mit dem Absenden stimmst du unseren{' '}
                                    <a 
                                        href="/datenschutz" 
                                        className="underline hover:text-[#f0ebd8] transition-colors"
                                        rel="noopener noreferrer"
                                    >
                                        Datenschutzbestimmungen
                                    </a>{' '}
                                    zu.
                                </p>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#748cab]/30">
                                <h2 className="font-bebas text-2xl text-[#f0ebd8] mb-6 tracking-wide">
                                    Kontakt Informationen
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#f0ebd8] text-xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">E-Mail</h3>
                                            <a 
                                                href="mailto:info@22orbit.de" 
                                                className="text-[#748cab] hover:text-[#f0ebd8] transition-colors text-lg underline hover:underline"
                                                rel="noopener noreferrer"
                                            >
                                                info@22orbit.de
                                            </a>
                                            <p className="text-[#748cab] text-sm mt-1">
                                                Antwort meist innerhalb von 24h
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#f0ebd8] text-xl">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">Telefon</h3>
                                            <a 
                                                href="tel:+4917664637327" 
                                                className="text-[#748cab] hover:text-[#f0ebd8] transition-colors text-lg underline hover:underline"
                                                rel="noopener noreferrer"
                                            >
                                                +49 17664637327
                                            </a>
                                            <p className="text-[#748cab] text-sm mt-1">
                                                Mo-Fr 9:00-20:00 Uhr
                                                <br />Sa-So 10:00-16:00 Uhr
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#f0ebd8] text-xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">Adresse</h3>
                                            <p className="text-[#748cab] text-lg">
                                                Nicolaistraße 5<br />
                                                39124 Magdeburg<br />
                                                Deutschland
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#f0ebd8] text-xl">⚡</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">Schnelle Hilfe</h3>
                                            <p className="text-[#748cab]">
                                                Kostenloses Beratungsgespräch<br />
                                                Unverbindliches Angebot
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#748cab]/30">
                                <h2 className="font-bebas text-2xl text-[#f0ebd8] mb-6 tracking-wide">
                                    Unser Standort
                                </h2>

                                <div className="rounded-xl overflow-hidden border border-[#748cab]/30">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5678901234567!2d11.6277659!3d52.1205167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47af5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sNicolaistra%C3%9Fe%205%2C%2039124%20Magdeburg!5e0!3m2!1sde!2sde!4v1672531200000!5m2!1sde!2sde"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                        title="22Orbit Standort Magdeburg"
                                    ></iframe>
                                </div>

                                <div className="mt-4 text-center">
                                    <p className="text-[#748cab] text-sm">
                                        Klicke auf die Karte für eine größere Ansicht
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Additional Contact */}
                    <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/30 text-center">
                        <h2 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-6 tracking-wide">
                            Folge uns auch hier
                        </h2>

                        <div className="flex justify-center space-x-6 mb-8">
                            <a
                                href="https://github.com/22orbit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#748cab]/40 transition-all duration-300 hover:scale-110"
                                aria-label="GitHub 22Orbit"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/22orbit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#748cab]/40 transition-all duration-300 hover:scale-110"
                                aria-label="Instagram 22Orbit"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/22orbit.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#748cab]/40 transition-all duration-300 hover:scale-110"
                                aria-label="Instagram 22Orbit"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12.017 0C8.396 0 7.9.01 6.71.048 5.522.085 4.73.222 4.058.42a5.919 5.919 0 0 0-2.136 1.391A5.919 5.919 0 0 0 .531 4.047c-.198.672-.335 1.464-.372 2.653C.119 7.9.01 8.396.01 12.017s.109 4.117.149 5.551c.037 1.189.174 1.981.372 2.653a5.919 5.919 0 0 0 1.391 2.136 5.919 5.919 0 0 0 2.136 1.391c.672.198 1.464.335 2.653.372 1.434.04 1.93.049 5.551.049s4.117-.01 5.551-.049c1.189-.037 1.981-.174 2.653-.372a5.919 5.919 0 0 0 2.136-1.391 5.919 5.919 0 0 0 1.391-2.136c.198-.672.335-1.464.372-2.653.04-1.434.049-1.93.049-5.551s-.01-4.117-.049-5.551c-.037-1.189-.174-1.981-.372-2.653a5.919 5.919 0 0 0-1.391-2.136A5.919 5.919 0 0 0 19.75.42c-.672-.198-1.464-.335-2.653-.372C16.117.01 15.621.001 12.017.001h0zm-.764 1.969c.375-.001.804-.001 1.201-.001 3.584 0 4.008.015 5.425.052 1.309.06 2.021.278 2.496.46.627.244 1.075.536 1.546 1.006s.762.919 1.006 1.546c.182.475.4 1.187.46 2.496.037 1.417.052 1.841.052 5.425s-.015 4.008-.052 5.425c-.06 1.309-.278 2.021-.46 2.496a4.168 4.168 0 0 1-1.006 1.546 4.168 4.168 0 0 1-1.546 1.006c-.475.182-1.187.4-2.496.46-1.417.037-1.841.052-5.425.052s-4.008-.015-5.425-.052c-1.309-.06-2.021-.278-2.496-.46a4.168 4.168 0 0 1-1.546-1.006 4.168 4.168 0 0 1-1.006-1.546c-.182-.475-.4-1.187-.46-2.496-.037-1.417-.052-1.841-.052-5.425s.015-4.008.052-5.425c.06-1.309.278-2.021.46-2.496a4.168 4.168 0 0 1 1.006-1.546 4.168 4.168 0 0 1 1.546-1.006c.475-.182 1.187-.4 2.496-.46 1.241-.056 1.724-.071 4.224-.071h0zm0 3.356a5.686 5.686 0 1 0 0 11.372 5.686 5.686 0 0 0 0-11.372zm0 9.372a3.686 3.686 0 1 1 0-7.372 3.686 3.686 0 0 1 0 7.372zm7.238-9.647a1.329 1.329 0 1 1-2.658 0 1.329 1.329 0 0 1 2.658 0z"/>
                                </svg>
                            </a>
                        </div>

                        <p className="text-[#748cab]">
                            Oder schreib uns direkt auf unseren sozialen Kanälen – wir freuen uns auf deine Nachricht! 🚀
                        </p>
                    </div>
                </div>
            </section>
            <FooterLegal />
        </>
    );
};

export default Kontakt;