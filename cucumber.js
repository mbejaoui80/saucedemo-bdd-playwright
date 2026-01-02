module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['step-definitions/**/*.js'],
    format: [
      'progress-bar', // Pour voir la barre dans la console
      'json:reports/cucumber_report.json' // Pour générer le fichier pour Jenkins
    ]
  }
};