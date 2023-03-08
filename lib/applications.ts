export interface Application {
  id: string;
  questions: ApplicationQuestion[];
}

export interface ApplicationQuestion {
  id: string;
  text: string;
}

export interface ApplicationResponse {
  question: ApplicationQuestion;
  answer: string;
}

export const APPLICATION_1: Application = {
  id: '1',
  questions: [
    {
      id: '1',
      text: 'What is your favorite color?',
    },
    {
      id: '2',
      text: 'What is your favorite animal?',
    },
  ],
};
