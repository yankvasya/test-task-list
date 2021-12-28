module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "import/prefer-default-export": 'off',
    "max-len": "off",
    "vue/max-len": [
      "error",
      {
        "code": 120,
        "template": 9000,
        "ignoreTemplateLiterals": true,
        "ignoreUrls": true,
        "ignoreStrings": true
      }
    ]
  },
};
