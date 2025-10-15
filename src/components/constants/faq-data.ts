interface QuestionItem {
  id: string;
  q: string;
  a: string;
}

export const faqItems: QuestionItem[] = [
  {
    id: '01',
    q: 'What technologies do you work with?',
    a: 'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: '02',
    q: 'Do you work on freelance or remote projects?',
    a: 'Yes, I’m open to freelance or remote opportunities — especially those focused on building intuitive and responsive user interfaces.',
  },
  {
    id: '03',
    q: 'Can you convert Figma or Sketch designs into code?',
    a: 'Absolutely! I specialize in translating design files into pixel-perfect, responsive frontend code with clean structure and component-based architecture.',
  },
  {
    id: '04',
    q: 'Do you collaborate with backend developers or teams?',
    a: 'Definitely! I enjoy working in cross-functional teams and have experience integrating frontend with various backend systems and APIs.',
  },
  {
    id: '05',
    q: 'Are you available for full-time roles?',
    a: 'I’m open to hearing about full-time opportunities that align with my values and growth as a frontend developer. Feel free to reach out!',
  },
];
