module.exports = {
  collectCoverageFrom: [
    'src/__test__/**/*.js'
  ],
  setupFiles: ['./jest.init.js'],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each']
};
