import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário se estiver usando Standalone Components
import { Projeto } from '../../models/projeto.models';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.scss'],
})
export class Projetos {
  projetos: Projeto[] = [
    {
      titulo: 'Projeto Casa de Mainha',
      descricao: 'Serviço de gerenciamento do hotel Casa de Mainha.',
      tecnologias: ['Java', 'Spring Boot'],
      linkGithub: 'https://github.com/Nphilin/Projeto-Casa-de-Mainha',
      papel: 'Desenvolvedor Principal',
    },
    {
      titulo: 'Sistema de Chamados TI',
      descricao: 'Sistema de chamados para atendimento e suporte de TI.',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      linkGithub: 'https://github.com/Nphilin/Sistema-Chamados-Ti',
      papel: 'Desenvolvedor Principal',
    },
    {
      titulo: 'Site Casamento',
      descricao: 'Convite de casamento meu e da minha noiva.',
      tecnologias: ['SCSS', 'HTML', 'TypeScript'],
      linkGithub: 'https://github.com/Nphilin/Site-Casamento',
      papel: 'Desenvolvedor Principal',
    },
    {
      titulo: 'Climatizacao.PE',
      descricao: 'Serviço de agendamento para empresas de Ar condicionado.',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      linkGithub: 'https://github.com/Nphilin/Climatizacao.PE',
      papel: 'Desenvolvedor Principal',
    },
    {
      titulo: 'Amigos do Nordeste Web',
      descricao: 'Plataforma web em desenvolvimento para a associação Amigos do Nordeste.',
      tecnologias: ['TypeScript', 'Design System', 'HTML/CSS'],
      linkGithub: 'https://github.com/swetonyancelmo/amigos-do-nordeste-web',
      papel: 'Co-participante',
    },
  ];
}
