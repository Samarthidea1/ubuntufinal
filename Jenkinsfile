pipeline{  
  environment {
    registry = "samarth1311/nodejs-helloworld"
    registryCredential = 'dockerhublogin'
    dockerImage = ''
  }
  agent any
    stages {
        stage('Clone repo') {
      steps {
        git credentialsId: 'github_id', url: 'https://github.com/Samarthidea1/ubuntufinal.git'
      }
    }
        stage('Build'){
           steps{
              script{
                sh 'npm install'
              } 
           }   
        }
        
        stage('Building image') {
            steps{
                script {
                  dockerImage = docker.build registry + ":latest" 
                 }
             }
          }
          stage('Push Image') {
              steps{
                  script {
                       docker.withRegistry( '', registryCredential){                            
                       dockerImage.push()
                      }
                   }
                } 
           }
           stage('Deploying into k8s'){
            steps{
                
                sh "cp -r /var/lib/jenkins/workspace/'pipeline job'/* /home/ubuntu/test"
                
                sh "kubectl delete -f deployment.yml"
		sh "kubectl apply -f deployment.yml"                
                
            }
        }
    }
}
