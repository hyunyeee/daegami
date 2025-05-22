export const TypeLabels = {
  period: "시기",
  region: "장소",
} as const;

export type TypeKey = keyof typeof TypeLabels;
