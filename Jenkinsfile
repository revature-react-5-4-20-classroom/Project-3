pipeline {
  agent any
  stages {
    stage('Build DataService') {
      agent {
        docker {
          image 'djagent:latest'
          args '-v /var/run/docker.sock:/var/run/docker.sock'
        }

      }
      when {
        expression {
          env.BRANCH_NAME == 'master' ||

          env.BRANCH_NAME == 'development' ||
          env.BRANCH_NAME == 'development-dataservice' ||
          env.CHANGE_TARGET == 'master' ||
          env.CHANGE_TARGET == 'development' ||
          env.CHANGE_TARGET == 'development-dataservice'
        }

      }
      environment {
        SPRING_PROFILES_ACTIVE = 'local'
      }
      steps {
        sh '''cd p3backend/DataService
chmod +x mvnw
docker images
#./mvnw install dockerfile:build'''
      }
    }

    stage('Build FrontEnd') {
      agent {
        docker {
          image 'node:13-alpine'
        }

      }
      when {
        expression {
          env.BRANCH_NAME == 'master' ||

          env.BRANCH_NAME == 'development' ||
          env.BRANCH_NAME == 'development-dataservice' ||
          env.BRANCH_NAME == 'development-reportservice' ||
          env.BRANCH_NAME == 'development-sqsservice' ||
          env.CHANGE_TARGET == 'master' ||
          env.CHANGE_TARGET == 'development' ||
          env.CHANGE_TARGET == 'development-dataservice' ||
          env.CHANGE_TARGET == 'development-reportservice' ||
          env.CHANGE_TARGET == 'development-sqsservice'
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