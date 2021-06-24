
pipeline {
    
      agent {
        docker { image 'node:14-alpine' }
    }
    
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

