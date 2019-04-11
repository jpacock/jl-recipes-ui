pipeline {
    agent any

    stages {
        stage ( 'Build' ) {
            sh 'npm install'
            sh 'ng build --prod'
        }

        stage ( 'Deploy' ) {
            sh 'echo "Hello"'
        }
    }
}