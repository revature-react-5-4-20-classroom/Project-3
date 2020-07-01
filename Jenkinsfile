pipeline {
  agent any
  stages {
    stage('Build DataService') {
      agent any
      when {
        expression {
          env.BRANCH_NAME == 'master' ||
          env.BRANCH_NAME == 'development' 
          // env.BRANCH_NAME == 'development-dataservice' ||
          // env.BRANCH_NAME.substring(0, 2) == 'PR'
        }
      }
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
      when {
        expression {
          env.BRANCH_NAME == 'master' ||
          env.BRANCH_NAME == 'development' 
          // env.BRANCH_NAME == 'development-dataservice' ||
          // env.BRANCH_NAME == 'development-reportservice' ||
          // env.BRANCH_NAME == 'development-sqsservice' ||
          // env.BRANCH_NAME.substring(0, 2) == 'PR'
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
    stage('Ls the root folder') { s
      agent any
      steps {
        sh '''ls
        printenv'''
        
    //   }
    // }
    // stage('Ls the root folder') {
    //   agent any
    //   when {
    //     expression {
    //       env.BRANCH_NAME == 'ocean-jenkins'
    //     }
    //   }
    //   steps {
    //     sh '''ls
    //     printenv'''
        
    //   }
    // }
    // stage('Ls the root folder') {
    //   agent any
    //   when {
    //     expression {
    //       env.BRANCH_NAME == 'ocean-jenkins'
    //     }
    //   }
    //   steps {
    //     sh '''ls
    //     printenv'''
        
    //   }
    // }

  }
}