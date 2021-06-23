pipeline {
    
    agent any 
    
    stages{
        stage("build"){
            steps{
            
                echo 'building the application'
             nodejs('nodejs16')
                 {
                    sh 'node -v'
                    sh 'npm install express -s'
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
