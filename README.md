# 🌸 Al-Den 🎸 Café – Serverless Web App

A three-tier serverless café application built using AWS services: Lambda, API Gateway, S3, and VPC. Designed to simulate a dynamic menu experience with cost-efficiency and hands-on cloud architecture.

## 🧱 Architecture
- **Frontend**: Static website hosted on Amazon S3
- **API**: Amazon API Gateway
- **Backend**: AWS Lambda (Python) inside a secure VPC

## 🛠️ AWS Services Used
| Service       | Purpose                          |
|---------------|----------------------------------|
| S3            | Hosts frontend                   |
| API Gateway   | Connects frontend to backend     |
| Lambda        | Executes backend logic           |
| VPC           | Secures backend network          |

## 🧪 Challenges & Fixes
- CIDR overlap in VPC → Planned subnet layout
- S3 access denied → Fixed with bucket policy
- 404 error → Corrected file name mismatch
- SSH failure → Pivoted to Lambda for simplicity

## 📸 Screenshots
- VPC setup
- S3 bucket config
- API Gateway route
- Lambda function
- Menu preview

## 🔗 Connect
- [LinkedIn](https://www.linkedin.com/in/alekhya-somanaboyana)

## 🔮 Future Enhancements
- Add login/auth with Cognito
- Store menu in DynamoDB
- Add order tracking and payment gateway
