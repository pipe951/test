pipeline {
    agent any

    environment {
        // กำหนด Environment Variables ที่จำเป็น
        BUILD_DIR = 'build'
        TEST_DIR = 'tests'
    }

    stages {
        // ขั้นตอนการ Build
        stage('Build') {
            steps {
                script {
                    echo 'Starting Build...'
                    bat 'call build.bat'  // รัน build.bat สำหรับ Windows
                }
            }
        }

        // ขั้นตอนการ Test
        stage('Test') {
            steps {
                script {
                    echo 'Running Tests...'
                    bat 'call run_tests.bat'  // รัน Unit Test Script
                }
            }
            post {
                always {
                    junit '**/test-*.xml'  // อ่านผลจาก Unit Test หากมี
                }
            }
        }

        // ขั้นตอนการ Deploy
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying Application...'
                    // รันคำสั่งสำหรับการ Deploy เช่น copy ไฟล์ไปยัง server หรือรัน script
                    bat 'call deploy.bat'
                }
            }
        }

        // ขั้นตอนการแจ้งเตือนเมื่อเสร็จสิ้น
        stage('Notify') {
            steps {
                script {
                    echo 'Sending Notifications...'
                    // ส่งการแจ้งเตือน เช่น ผ่าน Slack, Email หรืออื่น ๆ
                    // Slack plugin หรือ Email plugin สามารถใช้ในการแจ้งเตือน
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Deploy Completed Successfully!'
        }
        failure {
            echo 'Build or Deploy Failed!'
        }
    }
}
