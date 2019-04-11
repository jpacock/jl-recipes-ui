pipeline {
    agent any

    tools {nodejs "NodeJS 11.13.0"}

    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}