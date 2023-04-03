import { OptionalConfig } from 'tailwindcss/types/config';

type TailwindConfig = Partial<OptionalConfig>;

declare const basePreset: TailwindConfig;

declare const defineConfig: (contents: Array<string>) => {
    contents: string[];
    presets: never[];
};

export { basePreset, defineConfig };
