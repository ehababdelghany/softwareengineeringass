
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
        image 'maven:3-alpine'
        label 'my-defined-label'
        args  '-v /tmp:/tmp'
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

