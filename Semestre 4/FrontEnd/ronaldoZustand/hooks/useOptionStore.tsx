 import { create } from 'zustand'

type Props = {
    opcoes: string[];
    setOpcao: (opcao: string) => void;
}

export const useOptionStore = create<Props>((set) => ({
    opcoes: [],
    setOpcao(opcao) {
        set((state) => ({ opcoes: [...state.opcoes, opcao] }))
    },
}));