pipeline {
    agent any

    tools {nodejs "NodeJS 11.13.0"}

    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run ng -- build --prod'
            }
        }
        stage('Deployment'){
            steps {
                withAWS(region:'us-west-2', credentials:'aws-jenkins-credentials') {
              s3Delete(bucket: 'jl-recipes', path:'**/*')
              s3Upload(bucket: 'jl-recipes', workingDir:'dist/jl-recipes-ui', includePathPattern:'**/*');
            }
            }
        }
    }
}