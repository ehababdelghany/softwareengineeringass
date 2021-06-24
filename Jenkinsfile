
pipeline {
    
    agent any 
    
    stages{
        stage("build"){
            steps{
            
                echo 'building docker image'
                echo 'pulling repo from dockerhub'
                echo 'building docker image'
             nodejs('nodejs16')
                 {
                    sh 'node -v'
                    //sh 'yarn install'
                 }
             }        
        }
        
        stage("unit test"){
            steps{
            
                echo 'unit testing the application'
            
             }        
        }
        
        stage("E2E test"){
            steps{
            
                echo 'unit testing the application'
            
             }        
        }
        stage("deploy"){
            steps{
            
                echo 'deploying the application on AWS-EC2-INSTANCE'
            
             }        
        }
    
    }
}
   

