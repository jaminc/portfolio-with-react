export type Job = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  bulletPoints: string[];
};

export type Jobs = Job[];
