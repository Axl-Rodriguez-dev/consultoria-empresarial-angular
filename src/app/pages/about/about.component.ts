import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly teamMembers = [
    { name: 'Axl Rodriguez Quiceno', role: 'Desarrollador', bio: 'Ingeniero de software con sólida trayectoria en arquitectura de sistemas, desarrollo web moderno e integración de plataformas empresariales.' },
    { name: 'Wiston Martinez Martinez', role: 'Desarrollador', bio: 'Más de 12 años liderando proyectos de transformación digital. Especialista en planificación estratégica y gestión del cambio organizacional.' },
    { name: 'Adriana Muñoz Moreno', role: 'Desarrollador', bio: 'Consultora senior con experiencia en optimización de procesos, análisis de datos y diseño de modelos de negocio. Más de 60 proyectos liderados.' },
    { name: 'Daniel Rojas Marroquín', role: 'Desarrollador', bio: 'Estratega de presencia digital con amplia experiencia en posicionamiento de marca, campañas de contenido y analítica web.' },
    { name: 'Antony Yesid Garcia Naranjo', role: 'Desarrollador', bio: 'Especialista en análisis financiero y desarrollo de modelos de negocio sostenibles. Identifica oportunidades de crecimiento y optimización de recursos.' },
  ];
}
