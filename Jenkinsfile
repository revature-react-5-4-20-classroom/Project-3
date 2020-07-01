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

  }
}