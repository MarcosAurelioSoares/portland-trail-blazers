import React, { useState } from 'react';
import './Faq.css';

const questions = [
  { question: 'Quem é Portland Trail Blazers?', paragraphs: [
    'O Portland Trail Blazers é uma equipe profissional de basquete sediada em Portland, Oregon, nos Estados Unidos. Eles são membros da Conferência Oeste da National Basketball Association (NBA). O time foi fundado em 1970 como uma das franquias de expansão da NBA e desde então se estabeleceu como uma das equipes mais populares e bem-sucedidas da liga.',
    'O nome “Trail Blazers” faz referência ao espírito pioneiro e explorador do estado de Oregon, que é conhecido por suas vastas trilhas naturais. O termo “trailblazer” significa “abridor de caminhos” ou “desbravador”.',
  ] },
  { question: 'Qual a localização do time?', paragraphs: [
    'Portland, localizada no estado de Oregon, é a cidade sede do Portland Trail Blazers. É a maior cidade do estado e conhecida por sua atmosfera única e estilo de vida peculiar. Apelidada de "Cidade das Rosas" devido aos seus belos jardins e parques, Portland é um lugar vibrante, com uma mistura de cultura, natureza exuberante e uma comunidade apaixonada por esportes.',
    'A cidade de Portland é famosa por sua cena gastronômica diversificada e pela ênfase na sustentabilidade e nos produtos locais. Os moradores orgulham-se de suas opções de alimentos frescos, cafeterias artesanais e uma infinidade de cervejarias, fazendo de Portland um paraíso para os amantes da gastronomia e das bebidas.',
  ] },
  { question: 'Quais as conquistas?', paragraphs: [
    'O Portland Trail Blazers teve várias conquistas notáveis ao longo dos anos de sua história na NBA. Aqui estão algumas das conquistas mais destacadas do time:',
  ], list: [
    'Campeonato da NBA (1977): Em 1977, o Portland Trail Blazers conquistou o primeiro e único título de sua história até o momento. Liderados pelo MVP das Finais, Bill Walton, e pelo técnico Jack Ramsay, o Blazers derrotou o Philadelphia 76ers na série final por 4 a 2, alcançando o ápice da temporada e conquistando o campeonato da NBA.',
    'Aparições nas Finais da NBA: Além do título em 1977, o Portland Trail Blazers chegou às Finais da NBA em duas outras ocasiões. Em 1990, liderados por Clyde Drexler, Terry Porter e Jerome Kersey, o time alcançou a série final, mas foi derrotado pelo Detroit Pistons. Em 1992, o Blazers chegou novamente à final, mas foi derrotado pelo poderoso Chicago Bulls de Michael Jordan.',
    'Títulos de Divisão: O Portland Trail Blazers conquistou a divisão de sua conferência em várias temporadas. Até o corte de conhecimento em setembro de 2021, o Blazers conquistou a divisão seis vezes: 1978, 1991, 1992, 1999, 2015 e 2018.',
    'Aparições nos Playoffs: O Blazers tem um histórico consistente de participações nos playoffs. A equipe alcançou os playoffs em várias temporadas ao longo de sua história, o que demonstra sua competitividade e presença constante no cenário pós-temporada da NBA.',
    'Jogadores Notáveis: O Portland Trail Blazers teve uma série de jogadores notáveis em seu elenco ao longo dos anos. Alguns desses jogadores se destacaram individualmente, alcançando marcos significativos em suas carreiras. Isso inclui nomes como Bill Walton, Clyde Drexler, Terry Porter, Arvydas Sabonis, Brandon Roy, LaMarcus Aldridge e, é claro, Damian Lillard.',
  ] },
  { question: 'Quais os patrocinadores?', paragraphs: [
    'O Portland Trail Blazers possui diversos patrocinadores e parceiros que apoiam o time. Embora os patrocinadores possam variar ao longo do tempo, aqui estão alguns dos principais patrocinadores e parceiros do Trail Blazers:',
  ], list: [
    'Moda Health: A Moda Health é uma empresa de planos de saúde com sede em Oregon e é a patrocinadora do nome da arena do Trail Blazers, o Moda Center.',
    'Nike',
  ] },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section" aria-label="Perguntas frequentes sobre o Portland Trail Blazers">
      <div className="faq-decoration" aria-hidden="true" />
      <div className="faq-list">{questions.map((item, index) => <div className={`faq-item${open === index ? ' is-open' : ''}`} key={item.question}>
        <h2 className="faq-question"><button id={`faq-question-${index}`} type="button" aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen((current) => current === index ? null : index)}>{item.question}<svg viewBox="0 0 27 27" aria-hidden="true"><path d="m7.3 10.4 6.2 6.2 6.2-6.2" /></svg></button></h2>
        <div id={`faq-answer-${index}`} className="faq-answer-panel" role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={open !== index} inert={open !== index}>
          <div className="faq-answer-clip"><div className="faq-answer">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{item.list && <ol>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ol>}</div></div>
        </div>
      </div>)}</div>
    </section>
  );
}
