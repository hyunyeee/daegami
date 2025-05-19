export const TypeLabels = {
  period: "창업 시기",
  location: "창업 위치",
} as const;

export type TypeKey = keyof typeof TypeLabels; // "location" | "period"
