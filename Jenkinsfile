
pipeline {
    
   
    agent any
    stages{
        stage("build"){
            steps{
            
                echo 'building the application22'
                
                 nodejs('nodejs16')
                 {
                    sh 'node -v'
                    sh 'yarn install'
                    sh 'npm install express'
                    sh 'node -v'
                 }
                
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

