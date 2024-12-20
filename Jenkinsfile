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
                    bat 'npm install'  // ติดตั้ง dependencies ทั้งหมด
                }
            }
        }
        
        stage('Lint HTML') {
            steps {
                script {
                    // รัน HTMLHint เพื่อตรวจสอบ syntax ของไฟล์ .html
                    bat 'npx htmlhint ./*.html'
                }
            }
        }
        
        stage('Lint JavaScript') {
            steps {
                script {
                    // รัน ESLint เพื่อตรวจสอบ syntax ของไฟล์ .js
                    bat 'npx eslint ./**/*.js'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    bat 'npm test'  // รันการทดสอบ
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
