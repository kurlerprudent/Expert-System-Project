// frontend/state/useStore.ts
import { create } from 'zustand';

export interface SymptomState {
  selectedSymptoms: string[];
  addSymptom: (symptom: string) => void;
  removeSymptom: (symptom: string) => void;
  resetSymptoms: () => void;
}

export const useSymptomStore = create<SymptomState>((set) => ({
  selectedSymptoms: [],
  addSymptom: (symptom: string) =>
    set((state) => ({
      selectedSymptoms: [...state.selectedSymptoms, symptom],
    })),
  removeSymptom: (symptom: string) =>
    set((state) => ({
      selectedSymptoms: state.selectedSymptoms.filter((s) => s !== symptom),
    })),
  resetSymptoms: () => set({ selectedSymptoms: [] }),
}));
