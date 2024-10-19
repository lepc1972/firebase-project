pipeline {
    agent any

    triggers {
        githubPush()  // Configura el trigger para escuchar eventos de push de GitHub
    }

    stages {
        stage('Build') {
            steps {
                echo 'Construyendo...'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecutando pruebas...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación...'
            }
        }
    }
}
