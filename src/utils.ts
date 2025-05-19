import { TypeKey, TypeLabels } from "./types";

export const getLabel = (type: TypeKey): string => {
  return TypeLabels[type];
};
