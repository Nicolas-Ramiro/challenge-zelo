export const mockUser = {
  name: 'Carlos Mendes',
  email: 'carlos.mendes@email.com',
  cpf: '123.456.789-00',
  phone: '(11) 98765-4321',
  address: 'Rua das Flores, 123 - Apto 45',
  city: 'São Paulo',
  state: 'SP',
  subscription: 'Zelo Plus',
};

export const mockPets = [
  {
    id: '1',
    name: 'Luna',
    breed: 'Golden Retriever',
    age: 4,
    weight: 28.5,
    bpm: 82,
    status: 'Excelente',
  },
  {
    id: '2',
    name: 'Buddy',
    breed: 'Chihuahua',
    age: 2,
    weight: 2.5,
    bpm: 95,
    status: 'Bom',
  },
];

export const mockVaccines = [
  {
    id: '1',
    name: 'V10 - Dose 01',
    description: 'Proteção contra Cinomose, Parvovirose e Leptospirose.',
    status: 'APLICADA',
    date: '15 Out 2023',
  },
  {
    id: '2',
    name: 'Raiva - Reforço Anual',
    description: 'Obrigatória para trânsito internacional e nacional.',
    status: 'PENDENTE',
    date: 'Atrasada há 5 dias',
  },
  {
    id: '3',
    name: 'Gripe Canina',
    description: 'Prevenção de tosse dos canis e complicações.',
    status: 'AGENDADA',
    date: '22 Nov 2023',
  },
];

export const mockVitals = {
  heartRate: 84,
  heartRateAvg: 82,
  sleep: 9.5,
  sleepQuality: 85,
  calories: 450,
  caloriesGoal: 500,
  activity: {
    morning: 45,
    afternoon: 20,
  },
};
