export interface ProfileData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar_url?: string;
  created_at: string;
  subscription_plan: string;
  projects_created: number;
}

export interface PaymentHistory {
  id: string;
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export interface Website {
  id: string;
  name: string;
  url: string;
  status: "active" | "inactive" | "building";
  created_at: string;
  template: string;
}

export interface PaymentMethod {
  id: string;
  type: "card" | "bank";
  name: string;
  last4?: string;
  brand?: string;
  isDefault: boolean;
  expiryDate?: string;
}
