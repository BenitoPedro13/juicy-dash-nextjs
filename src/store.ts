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

interface DataState {
  data: Influencer[];
  fetchData: () => Promise<void>;
}

const useDataStore = create<DataState>((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await fetch('https://benitopedro.tech/csvs/data'); // Replace with your API endpoint
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  
}));

export default useDataStore;
