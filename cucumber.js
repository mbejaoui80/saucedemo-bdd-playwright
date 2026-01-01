// cucumber.js
module.exports = {
  default: {
    // Où sont les fichiers Gherkin (.feature)
    paths: ['features/**/*.feature'],
    // Où sont les scripts JS (.js)
    require: ['step-definitions/**/*.js'],
    // Format du rapport de test dans la console
    format: ['progress-bar', 'html:cucumber-report.html'],
    // Pour gérer les modules modernes
    import: [], 
  }
}