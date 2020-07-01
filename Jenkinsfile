pipeline {
  agent any
  stages {
    stage('Build DataService') {
      agent any
      environment {
        SPRING_PROFILES_ACTIVE = 'local'
      }
      steps {
        sh '''cd p3backend/DataService
chmod +x mvnw
./mvnw package
./mvnw install dockerfile:build'''
      }
    }

    stage('Build FrontEnd') {
      agent {
        docker {
          image 'node:13-alpine'
        }

      }
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh '''cd p3frontend/
npm i
npm run build'''
      }
    }

  }
}