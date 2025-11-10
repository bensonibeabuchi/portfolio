# Benson Portfolio — Dockerized Deployment on Azure

This repository contains my **portfolio web application**, containerized using **Docker** and deployed to **Azure App Service** via **CI/CD pipelines** in **Azure DevOps**.  
Infrastructure was provisioned using **Terraform (Infrastructure as Code)**.

---

## Tech Stack

- **Frontend:** Next.js  
- **Containerization:** Docker  
- **CI/CD:** Azure DevOps  
- **Cloud Provider:** Microsoft Azure  
- **IaC Tool:** Terraform  

---

## Steps Taken

### 1️⃣ Dockerized the Application

I built and containerized my portfolio app to ensure consistent deployment across environments.

```bash
# Build Docker image
docker build -t portfolio .

# Verify image
docker images

# Run locally for testing
docker run -p 3000:3000 portfolio

```

This container image encapsulates all dependencies, ensuring platform-agnostic deployment.



### 2️⃣ Infrastructure Deployment with Terraform

I automated the creation of all necessary Azure resources using Terraform:


- **Resource Group:**
- **Azure App Service Plan:**
- **Azure webApp**

```bash
# Initialize Terraform
terraform init

# Validate configuration
terraform validate

# Preview changes
terraform plan

# Apply configuration
terraform apply -auto-approve
```

This ensures the entire infrastructure can be replicated consistently using code.


### 3️⃣ Continuous Integration (CI) Pipeline

I configured a CI pipeline in Azure DevOps to:

- **Check out the repository:**
- **Build and test the app:**
- **Add unit tests with Jest + Azure DevOps Test Reporting:**
- **Build a Docker image:**
- **Push the image to Docker Hub:**
- **Publish the image tag for CD pipeline consumption:**

# CI YAML Snippet:

```bash
trigger:
  - main

stages:
  - stage: Build
    displayName: "Build and Push Docker Image"
    jobs:
      - job: Build
        steps:
          - checkout: self
          - script: docker build -t $(dockerhub_username)/portfolio:$(Build.BuildId) .
            displayName: "Build Docker Image"
          - script: docker push $(dockerhub_username)/portfolio:$(Build.BuildId)
            displayName: "Push to Docker Hub"
```

4️⃣ Continuous Deployment (CD) Pipeline

The CD pipeline builds and pushes the Docker image to Docker Hub, then deploys to Azure App Service.
A pre-deployment approval gate was added before production deployment.

Retrieves image tag from CI pipeline

Deploys Docker container to App Service

Includes a manual approval gate before production deployment

CD YAML Snippet:
```bash
stages:
  - stage: Deploy
    displayName: "Deploy to Production"
    dependsOn: Build
    jobs:
      - deployment: DeployToProduction
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebAppContainer@1
                  inputs:
                    azureSubscription: "$(service_connection)"
                    appName: "$(appServiceName)"
                    imageName: "$(dockerhub_username)/portfolio:latest"
```

### 5️⃣ Manual Approval Gate

Before deployment to production, a manual approval is required via Azure DevOps Environments.
This ensures quality control and prevents accidental production releases.

- **Environment:** production
- **Check:** Manual Approval
- **Approver:** Benson Ibeabuchi


### 6️⃣ Verification and Monitoring

After successful deployment:

Verified container was running correctly on Azure App Service

Checked deployment logs and endpoint accessibility

Configured Azure Application Insights for uptime, performance, and error monitoring


# Live Demo

Deployed URL: https://bensonibeabuchiportfolio.azurewebsites.net/home
Docker Hub Image: dockerhub.com/bensonibeabuchi/portfolio



### Future Improvements
Set up automated monitoring alerts via Azure Monitor
Add environment-based staging and blue-green deployment


👤 Author

# Benson Ibeabuchi
Surrey, BC
ibeabuchibenson@gmail.com


