pipeline {
    
    agent any 
    
    stages{
        stage("build"){
            steps{
            
                echo 'building the application'
                nodejs('node V16.3.0'){
                
                sh 'npm install express -s
                sh 'pwd'
                sh 'node index.js'
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



