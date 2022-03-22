module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'block-scoped-var': [
      'warn'
    ],
    'comma-spacing': [
      'warn'
    ],
    curly: [
      'warn'
    ],
    'eol-last': [
      'warn'
    ],
    eqeqeq: [
      'warn'
    ],
    indent: [
      'warn',
      2,
      {
        ImportDeclaration: 2
      }
    ],
    'linebreak-style': [
      'warn'
    ],
    'newline-after-var': [
      'warn'
    ],
    'newline-before-return': [
      'warn'
    ],
    'no-bitwise': [
      'warn'
    ],
    'no-console': [
      'warn'
    ],
    'no-constructor-return': [
      'warn'
    ],
    'no-debugger': [
      'warn'
    ],
    'no-eq-null': [
      'warn'
    ],
    'no-eval': [
      'warn'
    ],
    'no-irregular-whitespace': [
      'warn'
    ],
    'no-mixed-spaces-and-tabs': [
      'warn'
    ],
    'no-multiple-empty-lines': [
      1,
      {
        max: 1
      }
    ],
    'no-param-reassign': [
      'warn'
    ],
    'no-redeclare': [
      'warn'
    ],
    'no-trailing-spaces': [
      'warn'
    ],
    'no-unreachable': [
      'warn'
    ],
    'no-var': [
      'warn'
    ],
    'prefer-const': [
      'warn'
    ],
    radix: [
      'warn'
    ],
    semi: [
      'warn'
    ],
    'space-infix-ops': [
      'warn'
    ]
  }
}
