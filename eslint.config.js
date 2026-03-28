import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // Storybook render functions are valid React components but eslint-plugin-react-hooks
    // doesn't recognise them as such — disable hooks rules for story files.
    // Also relax a11y rules since stories are demos, not production UI.
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
  {
    ignores: ['dist/**', 'storybook-static/**', 'coverage/**', 'infra/**'],
  }
)
