@Library('JenkinsShared')_
pipeline{
    agent {label 'test'}
    
    stages{
        stage("Code"){
            steps{
                clone("https://github.com/sunnyshinde123/ToDoApp_By_React.git", "$branch")
                echo "project clonned successfully"
                
            }
        }
        stage("Test"){
            steps{
                echo  "This is the test stage"
            }
        }
        stage("Build"){
            steps{
                sh "docker build -t todo-react-app:latest HealthyApp/"
                echo "Image builded successfully"
            }
        }
        stage("Push to Hub"){
            steps{
                dockerpush("DockerHub", "todo-react-app", "latest")
            }
        }
        stage("Deploy"){
            steps{
                dockerrun("todo-react-app", "latest", "5173:5173")
                echo "Application running"
            }
        }
    }
}
