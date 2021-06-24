
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
            node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("my-image:${env.BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
                echo 'deploying the application'
           
             }        
        }
    
    }
}

