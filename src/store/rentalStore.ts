import { create } from "zustand";

interface RentalState {
  name: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  expirationDate: string;
  cardHolder: string;
  cvc: string;
  marketingConsent: boolean;
  termsAccepted: boolean;
  setRentalInfo: (field: string, value: any) => void;
}

export const useRentalStore = create<RentalState>((set) => ({
  name: "",
  phone: "",
  address: "",
  city: "",
  cardNumber: "",
  expirationDate: "",
  cardHolder: "",
  cvc: "",
  marketingConsent: false,
  termsAccepted: false,
  setRentalInfo: (field, value) => set((state) => ({ ...state, [field]: value })),
}));
