pipeline {

    agent any 



    stages{
        stage("build"){
            steps{

                echo 'building the application'
                nodejs('node V16.3.0'){

                //sh 'npm install express -s'
                sh 'pwd'
                //sh 'docker images'
                //sh 'docker build -t myapp:1.0 .'
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
      stage("E2E testing"){
            steps{

                echo 'E2E testing'

             }        
        }
    }


}


