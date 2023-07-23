pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your repository
                git 'https://github.com/raksmeycoding/jenkens.git'
            }
        }

       stage('Build Docker Image') {
            steps {
                // dir('jenkens_day_001') {
                //     sh 'pwd && ls -l'
                //     sh 'echo "check directories existing && " && ls -l'
                //     sh 'docker build . -t node-api:v1'
                // }
                // Stop and remove the existing container
                sh 'docker stop node-api-container || true'
                sh 'docker rm -f node-api-container || true'
                sh 'docker rmi -f node-api:v1 || true'
                 dir('jenkens_day_001') {
                    sh 'pwd && ls -l'
                    sh 'echo "check directories existing && " && ls -l'
                    sh 'docker build . -t node-api:v1'
                }
                // sh 'docker build . -t node-api:v1'
             }
        }

        stage('Deploy to Docker Container') {
            steps {
                

                // Start a new container
                sh 'docker run --name node-api-container -d -p 3000:3000 node-api:v1'
            }
        }
    }
}
