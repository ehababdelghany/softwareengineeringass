
pipeline {
    
    agent any 
    
    stages{
        stage("build"){
            steps{
            
                echo 'building the application22'
                git credentialsId: 'github', url: 'https://github.com/ehababdelghany/my-app.git'
               sh 'pwd'
               sh 'node -v'
               sh 'npm install'
                sh 'ls -l'
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
    
    }
}
   

