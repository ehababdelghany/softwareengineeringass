
node {
    try {
          def build_no = 1.2                    //${build_no}
          def user_name='ubuntu'                //${user_name}
          def deployment_ip='3.249.72.71'       //${deployment_ip}
          def deployment_ip2='3.249.79.142'       //${deployment_ip2}
        
        stage('Build') {
          
                git credentialsId: 'github', url: 'https://github.com/ehababdelghany/softwareengineeringass.git'
                echo 'building the application22'
                sh 'pwd'
                sh 'ls -l'
                sh 'node -v'
               
                sh 'npm install'
                sh 'ls -l'
                sh 'docker rmi $(docker images -q)'
                sh "docker build -t eabdelghany/myapp:${build_no} ."
                withCredentials([string(credentialsId: 'dockerhubb', variable: 'dockerhubPwd')]) { 
                    sh "docker login --username=eabdelghany --password=${dockerhubPwd}"
                }
                
                
                sh "docker push eabdelghany/myapp:${build_no}"
                sh 'docker images'

        }
         stage('Test') {
         
            echo 'testing the application'
            echo 'testcases code runs here'
            //sh 'echo "Fail!"; exit 1'
            //sh 'mvn clean compile'
            //sh 'mvn test'
            //
           
            
        }
        
        stage('deploy'){
      
       
        
        def run_cmd = "docker run -d -p 3000:3000 eabdelghany/myapp:${build_no}" 

        sshagent(credentials: ['ubuntu'], ignoreMissing: true) {
            echo 'deploying in node 1'
            sh "ssh -o StrictHostKeyChecking=no -l ${user_name} ${deployment_ip} /home/ubuntu/ehab/kill.sh"

            sh "ssh -o StrictHostKeyChecking=no -l ${user_name} ${deployment_ip} ${run_cmd}"
            echo 'deploying in node 2'
            sh "ssh -o StrictHostKeyChecking=no -l ${user_name} ${deployment_ip2} /home/ubuntu/ehab/kill.sh"

            sh "ssh -o StrictHostKeyChecking=no -l ${user_name} ${deployment_ip2} ${run_cmd}"
        }
         
         
        
        }
        
         stage('E2E TEST'){
            echo 'testing the application'

        }
        
        echo 'successful, sending mail'
        emailext body: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS:<br> Check console output at $BUILD_URL to view the results.<br><br> Build LOGS:<br> ${BUILD_LOG, maxLines=9999, escapeHtml=false} ,', subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: 'eabdelghany1996@gmail.com' 
        //mail bcc: '', body: "build success no $BUILD_NUMBER logs ", cc: '', from: '', replyTo: '', subject: 'myApp: built successfully', to: 'eabdelghany1996@gmail.com'
    } catch (e) {
        echo 'This will run only if failed'
        emailext body: '$PROJECT_NAME - Build # $BUILD_NUMBER - FAILED:<br> Check console output at $BUILD_URL to view the results.<br><br> Build LOGS:<br> ${BUILD_LOG, maxLines=9999, escapeHtml=false} ', subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - FAILED!', to: 'eabdelghany1996@gmail.com' 

        throw e
    } finally {
        

        //junit '**/target/surefire-reports/TEST-*.xml'
    }
}

