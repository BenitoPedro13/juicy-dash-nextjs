import { create } from 'zustand';

export interface Influencer {
  id: number;
  influencer: string;
  username: string;
  city: string;
  posts: string;
  impressions: string;
  interactions: string;
  clicks: string;
  videoViews: string;
  cpe: string;
  ctr: string;
  cpc: string;
  cpv: string;
  createdAt: string;
  updatedAt: string;
}

export interface Attachment {
  id: number;
  uniqueFilename: string;
  originalFilename: string;
  fileSize: number;
  createdAt: string;
  updatedAt: string;
}

interface DataState {
  data: Influencer[];
  attachments: Attachment[];
  fetchData: () => Promise<void>;
  fetchAttachment: () => Promise<void>;
}

const useDataStore = create<DataState>((set) => ({
  data: [],
  attachments: [],
  fetchData: async () => {
    try {
      const response = await fetch('https://benitopedro.tech/csvs/data'); // Replace with your API endpoint
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  fetchAttachment: async () => {
    try {
      const response = await fetch('http://localhost:3000/attachments/'); // Replace with your API endpoint
      const attachments: Attachment[] = await response.json();
      set({ attachments });
    } catch (error) {
      console.error('Error fetching attachments:', error);
    }
  },
  
}));

export default useDataStore;
