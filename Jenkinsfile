pipeline {
    agent any

    tools {
        // On utilise l'outil NodeJS qu'on a configuré dans Jenkins (vérifie que le nom est bien 'Node20' ou celui que tu as choisi)
        nodejs 'Node20'
    }

    stages {
        stage('Installation') {
            steps {
                // Installation des dépendances du projet
                sh 'npm ci'
                // Installation des navigateurs Playwright
                sh 'npx playwright install chromium'
            }
        }

        stage('Tests') {
            steps {
                // Lancement des tests Cucumber
                // Le catchError permet de continuer le pipeline même si les tests échouent (pour générer le rapport)
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh 'npx cucumber-js'
                }
            }
        }
    }

    post {
        always {
            // Génération du rapport Cucumber, quoi qu'il arrive (succès ou échec)
            cucumber fileIncludePattern: 'reports/cucumber_report.json', jsonReportDirectory: 'reports'
        }
    }
}