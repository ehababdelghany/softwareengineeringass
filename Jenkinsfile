pipeline {
     environment {
    registry = "eabdelghany/jenkins_test"
    registryCredential = 'dockerhub'
  }
    agent any 
    
    stages{
        stage("build"){
            steps{
            
                echo 'building the application'
                sh 'pwd'
                 nodejs('nodejs16')
                 {
                    sh 'node -v'
                    sh 'npm install express'
                 }
               // sh 'docker images'
            
             }        
        }
        
        stage("test"){
            steps{
            
                echo 'testing the application'
            
             }        
        }
        stage("deploy"){
            steps{
            
                echo 'deploying the application'
            
             }        
        }
        
        stage("E2E TESTING"){
            steps{
            
                echo 'deploying the application'
       
            
             }        
        }
    
    }
 

}



