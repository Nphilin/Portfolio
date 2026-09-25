import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodoAcademico, CasoEstudo } from '../../models/projeto.models';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudos.html',
  styleUrls: ['./estudos.scss'],
})
export class Estudos {
  // Grade Curricular UNIBRA - ADS (1º ao 4º Período)
  periodosAcademicos: PeriodoAcademico[] = [
    {
      periodo: '1º Período (UNIBRA)',
      status: 'Concluído',
      cadeiras: [
        { nome: 'Lógica de Programação e Algoritmos' },
        { nome: 'Introdução à Computação & Sistemas Operacionais' },
        { nome: 'Arquitetura de Computadores' },
        { nome: 'Inglês Instrumental - Básico' },
      ],
    },
    {
      periodo: '2º Período (UNIBRA)',
      status: 'Concluído',
      cadeiras: [
        { nome: 'Linguagem de Programação Orientada a Objetos (Java)' },
        { nome: 'Engenharia de Software e Requisitos' },
        { nome: 'Fundamentos de Redes de Computadores' },
        { nome: 'Gestão Ambiental e da Qualidade' },
      ],
    },
    {
      periodo: '3º Período (UNIBRA)',
      status: 'Concluído',
      cadeiras: [
        { nome: 'Banco de Dados e Modelagem SQL' },
        { nome: 'Desenvolvimento Web Front-End (HTML5, CSS3, JS)' },
        { nome: 'Estrutura de Dados e Algoritmos' },
        { nome: 'Inteligência Artificial Aplicada / Machine Learning' },
      ],
    },
    {
      periodo: '4º Período (UNIBRA)',
      status: 'Em Andamento',
      cadeiras: [
        { nome: 'Análise e Projetos de Sistemas' },
        { nome: 'Desenvolvimento Web Avançado & Frameworks' },
        { nome: 'Testes de Software e Garantia de Qualidade (QA)' },
        { nome: 'Gestão de Projetos de TI e Metodologias Ágeis' },
      ],
    },
  ];

  // Casos de Estudo Autônomos / Especializações
  casosEstudo: CasoEstudo[] = [
    {
      tecnologia: 'Angular',
      categoria: 'Front-End Framework',
      status: 'Em Foco',
      descricao:
        'Desenvolvimento de SPA com componentes reutilizáveis, RxJS, TypeScript e integração de APIs REST.',
    },
    {
      tecnologia: 'Next.js',
      categoria: 'Full-Stack Framework (React)',
      status: 'Em Foco',
      descricao:
        'Aprofundamento em Server-Side Rendering (SSR), Static Site Generation (SSG) e Server Actions.',
    },
    {
      tecnologia: 'ServiceNow',
      categoria: 'Plataforma ITSM & Governança',
      status: 'Futuro Objetivo',
      descricao:
        'Estudo voltado para gestão de serviços de TI, automação de fluxos operacionais e suporte corporativo.',
    },
    {
      tecnologia: 'Cybersecurity',
      categoria: 'Segurança da Informação',
      status: 'Futuro Objetivo',
      descricao:
        'Fundamentos de segurança defensiva, testes de vulnerabilidade, privacidade de dados e conformidade (LGPD).',
    },
  ];
}
