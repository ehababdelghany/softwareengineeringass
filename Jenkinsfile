
pipeline {
    
   
    agent any
    stages{
        stage("build"){
            steps{
            
                echo 'building the application22'
                
             }        
        }
        
        stage("test"){
            
             agent {
                docker {
                    image 'gradle:6.7-jdk11'
                    // Run the container on the node specified at the top-level of the Pipeline, in the same workspace, rather than on a new node entirely:
                    reuseNode true
                }
            }
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

