pipeline {
    agent any

    stages {
        stage ( 'Build' ) {
            steps{
                sh 'npm install'
                sh 'ng build --prod'
            }
        }

        stage ( 'Deploy' ) {
            steps{
                sh 'echo "hello world"'
            }
        }
    }
}