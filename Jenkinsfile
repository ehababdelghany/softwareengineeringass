
pipeline {
    
   
    agent any
    stages{
        stage("build"){
            steps{
            
                echo 'building the application22'
                sh 'node --version'
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

