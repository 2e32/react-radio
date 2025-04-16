// Может быть ключом объекта или функцией извлечения

type OptionKey<O> = keyof O | ((option: O, index: number) => React.Key);
type OptionContent<O> = keyof O | ((option: O, index: number) => React.ReactNode);
type OptionValue<O> = keyof O | ((option: O) => unknown);

export type { OptionKey, OptionContent, OptionValue };
