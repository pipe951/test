pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                 git branch: 'main', url: 'https://github.com/pipe951/test.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }
        stage('Publish HTML Report') {
            steps {
                archiveArtifacts artifacts: '**/*.html', allowEmptyArchive: true
            }
        }
    }
    post {
        always {
            junit '**/test-*.xml' // ใช้สำหรับบันทึกผลทดสอบหากใช้ Jest หรือ Mocha
        }
    }
}
