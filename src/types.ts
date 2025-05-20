export const TypeLabels = {
  period: "시기",
  location: "장소",
} as const;

export type TypeKey = keyof typeof TypeLabels; // "location" | "period"
