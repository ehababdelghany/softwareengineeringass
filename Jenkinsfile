
node {

        def build_no = 1.1   //${build_no}
        
        stage('Build') {
          
                git credentialsId: 'github', url: 'https://github.com/ehababdelghany/softwareengineeringass.git'
                echo 'building the application22'
                sh 'pwd'
                sh 'ls -l'
                sh 'node -v'
                sh 'npm install'
                sh 'ls -l'
                //sh 'docker rmi $(docker images -q)'
                //sh "docker build -t eabdelghany/myapp:${build_no} ."
                //withCredentials([string(credentialsId: 'dockerhubb', variable: 'dockerhubPwd')]) { 
                  //  sh "docker login --username=eabdelghany --password=${dockerhubPwd}"
                //}
                
                
                //sh "docker push eabdelghany/myapp:${build_no}"
                sh 'docker images'

        }
         stage('Test') {
         
            echo 'testing the application'
            sh 'ls -l'

            //sh 'mvn clean compile'
            //sh 'mvn test'
            //junit '**/target/surefire-reports/TEST-*.xml'
           
            
        }
        
        stage('deploy'){
      
       
        
        def run_cmd = "docker run -d -p 3000:3000 eabdelghany/myapp:${build_no}" 

        sshagent(credentials: ['ubuntu'], ignoreMissing: true) {
            
            sh 'ssh -o StrictHostKeyChecking=no -l ubuntu 3.249.72.71 /home/ubuntu/ehab/kill.sh'

            sh "ssh -o StrictHostKeyChecking=no -l ubuntu 3.249.72.71 ${run_cmd}"
        }
         
         
        // sh 'docker run -d myapp:1.0'
        }
        
         stage('E2E TEST'){
   
         sh 'docker ps'
         //sh 'docker run eabelghany/docker:lts'
        }
        
        
        
    
}
