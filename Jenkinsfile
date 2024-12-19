pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'call build_and_deploy.bat'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
            }
        }
    }
}
