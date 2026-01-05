import { useRef, useState, useEffect } from 'react';
import './certifications.css';
import linkedinIcon from '../../assets/icons/linkedin.svg';

/* IMPORTS DOS ARQUIVOS (PNG) */
import ccna from '../../assets/certifications/CCNA_ Introdução às Redes.png';
import cyberThreat from '../../assets/certifications/Cyber_Threat_Management.png';
import uxArch from '../../assets/certifications/Fundamentos da Arquitetura de User Experience.png';
import uxInfo from '../../assets/certifications/Fundamentos da Arquitetura da Informação.png';
import jsObjects from '../../assets/certifications/Criando Objetos e Classes em JavaScript.png';
import jsImport from '../../assets/certifications/Importação e Exportação com JavaScript.png';
import llmsDeep from '../../assets/certifications/IA Por Debaixo dos Panos: Como Modelos de LLM.png';
import llmsPractice from '../../assets/certifications/Aplicações Práticas de LLMs.png';
import softwarePrinciples from '../../assets/certifications/Princípios de Desenvolvimento de Software.png';
import appPrinciples from '../../assets/certifications/Princípios de Desenvolvimento De Aplicações.png';
import marketing from '../../assets/certifications/Fundamentos de Marketing Digital e Comércio Eletrônico.png';
import uxDesign from '../../assets/certifications/Introdução ao UX Design.png';
import jsFormation from '../../assets/certifications/Apresentação da Formação JavaScript Developer.png';
import softwareStructure from '../../assets/certifications/Estrutura de um Software e Seu Ambiente de Desenvolvimento.png';
import networksExam from '../../assets/certifications/Exame da Trilha de Técnico em Redes.png';
import traffic from '../../assets/certifications/Tráfego Pago.png';
import marketingImg from '../../assets/certifications/Marketing Digital.png';

/* CERTIFICATIONS DATA */
const certifications = [
    { title: 'CCNA: Introduction to Networks', org: 'Cisco Networking Academy', date: '2025', file: ccna },
    { title: 'Cyber Threat Management', org: 'Cisco Networking Academy', date: '2025', file: cyberThreat },
    { title: 'UX Architecture Fundamentals', org: 'UX', date: '2024', file: uxArch },
    { title: 'Information Architecture Fundamentals', org: 'UX', date: '2024', file: uxInfo },
    { title: 'JavaScript Objects and Classes', org: 'JavaScript', date: '2024', file: jsObjects },
    { title: 'JavaScript Import and Export', org: 'JavaScript', date: '2024', file: jsImport },
    { title: 'LLMs Under the Hood', org: 'Artificial Intelligence', date: '2024', file: llmsDeep },
    { title: 'Practical Applications of LLMs', org: 'Artificial Intelligence', date: '2024', file: llmsPractice },
    { title: 'Software Development Principles', org: 'Engineering', date: '2024', file: softwarePrinciples },
    { title: 'Application Development Principles', org: 'Engineering', date: '2024', file: appPrinciples },
    { title: 'Digital Marketing & E-commerce', org: 'Marketing', date: '2024', file: marketing },
    { title: 'Introduction to UX Design', org: 'UX', date: '2024', file: uxDesign },
    { title: 'JavaScript Developer Program Overview', org: 'JavaScript', date: '2024', file: jsFormation },
    { title: 'Software Structure & Development Environment', org: 'Engineering', date: '2024', file: softwareStructure },
    { title: 'Network Technician Career Track Exam', org: 'Networks', date: '2025', file: networksExam },
    { title: 'Paid Traffic and Ads', org: 'Marketing', date: '2024', file: traffic },
    { title: 'Digital Marketing', org: 'Marketing', date: '2024', file: marketingImg },
];

export default function Certifications() {
    const trackRef = useRef(null);
    const [activeCert, setActiveCert] = useState(null);

    /* Fechar modal com ESC */
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setActiveCert(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <section className="certifications" id="certifications">
            <div className="certifications-header">
                <h2>Certifications</h2>
                <p>
                    My certifications reflect a strong foundation in software engineering, architecture, security, and modern development practices, complemented by knowledge in product, UX, and digital growth.
To keep this portfolio clear, focused, and easy to navigate, only some certifications are displayed here, representing the areas most aligned with my current professional focus and the projects presented.
My complete certification history is available on my LinkedIn profile, where I actively document my continuous learning journey.
                </p>
            </div>

            {/* SCROLL */}
            <div className="cert-scroll-wrapper">
                <div className="cert-track" ref={trackRef}>
                    {certifications.map((c, i) => (
                        <div
                            className="cert-card"
                            key={i}
                            onClick={() => setActiveCert(c)}
                        >
                            <div className="cert-icon">🎓</div>

                            <div className="cert-preview-wrapper">
                                <img
                                    src={c.file}
                                    alt={c.title}
                                    className="cert-preview"
                                    draggable={false}
                                />
                            </div>

                            <h3>{c.title}</h3>
                            <span className="cert-org">{c.org}</span>
                            <span className="cert-date">{c.date}</span>
                        </div>
                    ))}
                </div>

                <div className="cert-scroll-indicator">→</div>
            </div>

            {/* CTA LINKEDIN */}
            <div className="certifications-cta">
                <a
                    href="https://www.linkedin.com/in/brunawslopes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications-btn"
                >
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="certifications-btn-icon"
                        draggable={false}
                    />
                </a>
            </div>

            {/* MODAL */}
            {activeCert && (
                <div
                    className="cert-modal"
                    onClick={() => setActiveCert(null)}
                >
                    <div
                        className="cert-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="cert-modal-close"
                            onClick={() => setActiveCert(null)}
                        >
                            ×
                        </button>

                        <img
                            src={activeCert.file}
                            alt={activeCert.title}
                        />

                        <h3>{activeCert.title}</h3>
                        <p>{activeCert.org} · {activeCert.date}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
