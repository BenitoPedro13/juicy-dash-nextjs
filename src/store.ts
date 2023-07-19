"use client"
import { create } from "zustand";
import { setCookie } from "nookies";
import Router from "next/router";

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

export interface Session {
  isAuthenticated: boolean;
  user: {
    name?: string,
    email?: string,
    campaign?: string,
    userId?: number
  }
}

export type LoginFormData = {
  email: string;
  password: string;
};

interface DataState {
  session: Session;
  signIn: (loginFormData: LoginFormData) => Promise<boolean>;
  getUserByToken: (access_token: string) => Promise<boolean>;
  data: Influencer[];
  attachments: Attachment[];
  fetchData: () => Promise<void>;
  fetchAttachment: () => Promise<void>;
}

const useDataStore = create<DataState>((set) => ({
  session: {
    isAuthenticated: false,
    user: {}
  },
  signIn: async (loginFormData: LoginFormData) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      if(!response.ok) {
        return false;
      }

      const data = await response.json();

      setCookie(undefined, 'juicy-admin-token', data.access_token, {
        maxAge: 60 * 60 * 1 // 1 hora
      });

      set({session: {
        isAuthenticated: true,
        user: data.user,
      }});

      return true
      // const router = useRouter();
      // if (router) {
      //   router.push('/dashboard');
      // }
    } catch (error) {
      console.log("sign error: ", error);
      return false
    }
  },
  getUserByToken: async (access_token: string) => {
    try {
      const response = await fetch("http://localhost:3000/auth/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`, // Set the token in the Authorization header
        },
      });
  
      if (!response.ok) {
        return false;
      }
  
      const data = await response.json();

      set({
        session: {
          isAuthenticated: true,
          user: data.user,
        },
      });
  
      return true;
    } catch (error) {
      console.log("sign error: ", error);
      return false;
    }
  },
  data: [],
  attachments: [],
  fetchData: async () => {
    try {
      const response = await fetch("https://benitopedro.tech/csvs/data"); // Replace with your API endpoint
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  fetchAttachment: async () => {
    try {
      const response = await fetch("https://benitopedro.tech/attachments/"); // Replace with your API endpoint
      const attachments: Attachment[] = await response.json();
      set({ attachments });
    } catch (error) {
      console.error("Error fetching attachments:", error);
    }
  },
}));

export default useDataStore;
