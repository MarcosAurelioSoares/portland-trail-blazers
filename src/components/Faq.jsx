import React, { useState } from 'react';
import './Faq.css';

const questions = [
  { question: 'Quem é Portland Trail Blazers?', paragraphs: [
    'O Portland Trail Blazers é uma equipe profissional de basquete sediada em Portland, Oregon, nos Estados Unidos. Eles são membros da Conferência Oeste da National Basketball Association (NBA). O time foi fundado em 1970 como uma das franquias de expansão da NBA e desde então se estabeleceu como uma das equipes mais populares e bem-sucedidas da liga.',
    'O nome “Trail Blazers” faz referência ao espírito pioneiro e explorador do estado de Oregon, que é conhecido por suas vastas trilhas naturais. O termo “trailblazer” significa “abridor de caminhos” ou “desbravador”.',
  ] },
  { question: 'Qual a localização do time?' },
  { question: 'Quais as conquistas?' },
  { question: 'Quais os patrocinadores?' },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section" aria-label="Perguntas frequentes sobre o Portland Trail Blazers">
      <div className="faq-decoration" aria-hidden="true" />
      <div className="faq-list">{questions.map((item, index) => <div className="faq-item" key={item.question}>
        <h2 className="faq-question"><button id={`faq-question-${index}`} type="button" aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}>{item.question}<svg viewBox="0 0 27 27" aria-hidden="true"><path d={open === index ? 'm7.3 16.6 6.2-6.2 6.2 6.2' : 'm7.3 10.4 6.2 6.2 6.2-6.2'} /></svg></button></h2>
        <div id={`faq-answer-${index}`} className="faq-answer" role="region" aria-labelledby={`faq-question-${index}`} hidden={open !== index}>{item.paragraphs ? item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>Resposta aguardando o conteúdo do Figma.</p>}</div>
      </div>)}</div>
    </section>
  );
}
