pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'call build.bat'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
            }
        }
    }
}
