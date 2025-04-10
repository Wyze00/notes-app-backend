import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import daStyle from 'eslint-config-dicodingacademy';


export default defineConfig([
  daStyle,
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
]);