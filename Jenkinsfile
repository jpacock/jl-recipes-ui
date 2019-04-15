pipeline {
    agent any

    tools {nodejs "NodeJS 11.13.0"}

    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'ng build --prod'
            }
        }
        stage('Deployment'){
            steps {
                withAWS(region:'us-west-2') {
              s3Delete(bucket: 'jl-recipes', path:'**/*')
              s3Upload(bucket: 'jl-recipes', workingDir:'dist/jl-recipes-ui', includePathPattern:'**/*');
            }
            }
        }
    }
}