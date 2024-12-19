pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/username/repository.git'
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
        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: '**/test-results/**/*.xml', allowEmptyArchive: true  // เก็บไฟล์ XML
            }
        }
    }
    post {
        always {
            junit '**/test-results/**/*.xml'  // อ่านผลทดสอบจากไฟล์ XML
        }
    }
}
