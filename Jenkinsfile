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
            // Génère le rapport quoi qu'il arrive
            cucumber fileIncludePattern: 'reports/cucumber_report.json', jsonReportDirectory: 'reports'
        }
        success {
            // Message vert si tout va bien
            discordSend description: "✅ Les tests ont réussi ! Tout est stable.", 
                        footer: "Succès", 
                        link: env.BUILD_URL, 
                        result: currentBuild.currentResult, 
                        title: "Build #${env.BUILD_NUMBER} : SUCCÈS", 
                        webhookURL: 'https://discord.com/api/webhooks/1456698900277629103/cmlLptwcJr2qfYGdux8jrZlZxMwU4Zu9B0RhzU4OE-leiet1sXskvS2Mg95T3fw3DHdh' 
        }
        failure {
            // Message rouge si ça plante
            discordSend description: "❌ Alerte ! Les tests ont échoué.", 
                        footer: "Échec", 
                        link: env.BUILD_URL, 
                        result: currentBuild.currentResult, 
                        title: "Build #${env.BUILD_NUMBER} : ÉCHEC", 
                        webhookURL: 'https://discord.com/api/webhooks/1456698900277629103/cmlLptwcJr2qfYGdux8jrZlZxMwU4Zu9B0RhzU4OE-leiet1sXskvS2Mg95T3fw3DHdh'
        }
    }
    
}