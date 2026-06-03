export type CardCount = {
  official: number;
  total: number;
};

export type SetBrief = {
  id: string;
  name: string;
  logo?: string;
  symbol?: string;
  cardCount: CardCount;
};

export type Serie = {
  id: string;
  name: string;
  logo?: string;
  sets: SetBrief[];
};

export type CardBrief = {
  id: string;
  localId: string;
  name: string;
  image?: string;
};

export type SetDetail = {
  id: string;
  name: string;
  logo?: string;
  symbol?: string;
  cardCount: CardCount;
  cards?: CardBrief[];
  serie?: { id: string; name: string };
};

export type Attack = {
  name: string;
  cost?: string[];
  damage?: string | number;
  effect?: string;
};

export type Card = {
  id: string;
  localId: string;
  name: string;
  image?: string;
  category?: string;
  rarity?: string;
  hp?: number;
  types?: string[];
  stage?: string;
  evolveFrom?: string;
  description?: string;
  attacks?: Attack[];
  weaknesses?: { type: string; value: string }[];
  retreat?: number;
  set?: SetBrief;
  pricing?: {
    cardmarket?: Record<string, number | string>;
    tcgplayer?: Record<string, unknown>;
  };
};
