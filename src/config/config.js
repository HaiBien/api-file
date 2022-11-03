const DEFAULT_DB_URI = "mongodb://localhost:27017/app";

const config = {
  production: {
    secret: 'MY APP',
    MONGO_URI: process.env.MONGO_URI || DEFAULT_DB_URI,
    port: process.env.PORT,
    powerbi: {
      reportId: '4556b5bd-5675-4bad-a086-09d706e60747',
      groupId: 'd2f53ae5-8d89-476f-a2a2-8305ed5bc4e3',
      client_id: '7f06793e-a942-43cc-975c-44fdbb40a5b3',
      client_secret: 'SMZ7Q~QyER3T.-9ZSgunyxN2xcS2bmorqpFV~'
    },
    powerbi_principal: {
      "authenticationMode": "serviceprincipal",
      "authorityUri": "https://login.microsoftonline.com/common/v2.0",
      "scope": "https://analysis.windows.net/powerbi/api",
      "apiUrl": "https://api.powerbi.com/",

      "clientId": "ead72755-114e-47fe-8428-474bc51f14ea",
      "workspaceId": "d2f53ae5-8d89-476f-a2a2-8305ed5bc4e3",
      "reportId": "4556b5bd-5675-4bad-a086-09d706e60747",
      "pbiUsername": "dung@thinklabs.com.vn",
      "pbiPassword": "TL@36Admin",
      "clientSecret": "2LI7Q~Qn5.LUcdLGZQtT.kdaGvXyH~ywMF5UZ",
      "tenantId": "aff7bae3-25b9-4fb5-9581-91b1e53d995f"
    },
    "mail": {
      "host": "smtp.gmail.com",
      "port": 587,
      "secure": false,
      "auth": {
        "user": "manager.tradar@gmail.com",
        "pass": "thinklabs@36"
      }
    },
    mail_mailgun: {
      "auth": {
        "api_key": "e1d4c20fa30e05a4cbc5c9435dc598f6-b892f62e-5d7832d3",
        "domain": "sandboxd48b21c0aea74e508097ca22c1ac3ad7.mailgun.org"
      }
    },
    firebase_config: {
      "credential":{
        "type": "service_account",
        "project_id": "aibolit-2ec88",
        "private_key_id": "88b30f3d6fa88ce60a024b8b13a9d6a5160fb83a",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtg4QmGgHXEpuV\ndQ6RCKPt7qDSncXpBaaTk0QU3Nu6vrdrKALujwyZsMOofr0U30wO6uxrRmuEJLUt\ndJ8ZuKGdNmr3ViA1ECuYuNq1n9VIysJLI0HQQCvJAfWlpet5fggbxqGkV9/hDWl1\nh/Z89pLTvZU17K4goeIrwzvCIj3f+P/3SRvtrBZhxySDlelrsDZVamXIgTRwFhMq\n09QFyWvkXg4rCv2/tSf3DNhIwh6CDmv4c1fPYas32kI9Z7rMp7R6Ek4er5az9PUl\nYn9vH9yId+nEy+tSpy3isnhhQj2uW4wbkWgH2WHwdCgcJ38H6A5tFTX3xlL6KidK\nifr0N/55AgMBAAECggEAJPkqVqgiDj9T0eQwp20M6W147YhbHM1scnPmBQAO/lsX\nYIkVHtpyl+lXt/bRubnfTip3GGDYFj9wL/By2ptCLOrknjHHCSeZ8qApUpxtaWZz\nQmmP451Y9ysouhSB+dCGT8ziss9a0Gz4NOg0+Ond3aq/Oc9mR2PXevXOLQ742lmt\n2SrG7j/NCfjE33XJ2jCa1pGDuH/T+gZzdRPaFhCm4N/OJYHnw6crZH6+WPe4w7nn\nE7UTMdyJYlWwvJogt33fhJzhSrk8OOTo8/Dso3I+i8vx/6NUcNrLcUpetNPdHXa6\nOXvtRMPiOlQzsplCncJRNW6iS7gCJwGCztHPzsJ/VQKBgQDd04odkvCBCLiR7ijB\nEdUjR6zYZQbEWVciOID3M+Fu/o3w+xPGqBIdje7WyOllOKBEnhVnhJ73P9F+dNhl\nOkrGapFbD7ZAPSetg+GAfKFawsZD8P2OfmiX7/hrGnv10f10f12xy+rvoRxK84oP\nChTRMYInqU3qIMMuneU33UmmUwKBgQDIPpvQRLizNtEu3829pLtS3NNOeXdQEPtf\nF1RTe0awjjZZQQy7QKVQHQCMyaqbRReBDm9WSjctWCnaFmqcPy6WbUfUgc+55FlH\n1dMJiTyRiV/IaIYd1qjwnUlw9bO2P1L4f2Z+qJRm8MNN+YDyQU4GQtF60qKcc8dA\nhymeGrhWgwKBgQCNgZe22/ieZ8DOHt5So5ySn/OMK45QjSl/hAoJKEhj9PD5TEHG\nVYsQ3W0CCTKSRrg+bZX77mc2FLkAcWtlz/TJdEv7ih9aBWkdUGb2/wozitLNnpsx\nXkQ8wHF5aXCwVN/ZhDJx7EKX0O/qhEeK5oR3Gp0Lzf4NIA9C2qjRpVGJTwKBgQCs\nx3jiR6mm2RG9hFad39nSMcAR4jTU3RJIhnS4Y5InHU4/zSUTHUCG0795uzh+KSuS\nq8XdisP5WC0khFsQ3mNwYHKuJiP6ndF7bkBd5hBg80u2PJocfO/gTZbk5Nxf0Fvj\nFup1Nzh1aiDa0wI0Ba0xMc5WUBEHNc8jGn0KcrvDyQKBgAp9/GbCkOUBye6ZdbMa\nGSKYhqSJM/XrQ7BZhBE8davPiLayU2a1rrjmaGfC/YXsbpwrhvMQZQpQI3vNeb4e\nyDaAM+OTMADdzxSM05CXlETj5jjTvIatof+JvoB7xD0jb3o71wUX0otptl03SQZF\nsqPnIKyp+cNR94K5jGtfVP91\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-zoq3v@aibolit-2ec88.iam.gserviceaccount.com",
        "client_id": "103850110860627029708",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zoq3v%40aibolit-2ec88.iam.gserviceaccount.com"
      },
      "databaseURL": "https://aibolit-2ec88-default-rtdb.firebaseio.com"
    },
    api_sync_valid: {
      username: 'sync_data_his',
      password: 'Y#c=<R7?g5hzh)LA',
      api_key: 'aff7bae3-25b9-4fb5-9581-91b1e53d995f'
    },
    host_api_image: 'https://bvphusanhaiphong.thinklabs.com.vn/files'
  },
  development: {
    secret: 'BVPHUSANHAIPHONG',
    MONGO_URI: 'mongodb://localhost:27017/app',
    port: 27017,
    powerbi: {
      reportId: '4556b5bd-5675-4bad-a086-09d706e60747',
      groupId: 'd2f53ae5-8d89-476f-a2a2-8305ed5bc4e3',
      client_id: '7f06793e-a942-43cc-975c-44fdbb40a5b3',
      client_secret: 'SMZ7Q~QyER3T.-9ZSgunyxN2xcS2bmorqpFV~'
    },
    powerbi_principal: {
      "authenticationMode": "serviceprincipal",
      "authorityUri": "https://login.microsoftonline.com/common/v2.0",
      "scope": "https://analysis.windows.net/powerbi/api",
      "apiUrl": "https://api.powerbi.com/",

      "clientId": "ead72755-114e-47fe-8428-474bc51f14ea",
      "workspaceId": "d2f53ae5-8d89-476f-a2a2-8305ed5bc4e3",
      "reportId": "4556b5bd-5675-4bad-a086-09d706e60747",
      "pbiUsername": "dung@thinklabs.com.vn",
      "pbiPassword": "TL@36Admin",
      "clientSecret": "2LI7Q~Qn5.LUcdLGZQtT.kdaGvXyH~ywMF5UZ",
      "tenantId": "aff7bae3-25b9-4fb5-9581-91b1e53d995f"
    },
    "mail": {
      "host": "smtp.gmail.com",
      "port": 587,
      "secure": false,
      "auth": {
        "user": "manager.tradar@gmail.com",
        "pass": "thinklabs@36"
      }
    },
    mail_mailgun: {
      "auth": {
        "api_key": "22c6ee1fde1b7cbc0b360ef9a8c7d6da-4836d8f5-76b43d5c",
        "domain": "thinklabs.vn"
      }
    },
    firebase_config: {
      "credential":{
        "type": "service_account",
        "project_id": "aibolit-2ec88",
        "private_key_id": "88b30f3d6fa88ce60a024b8b13a9d6a5160fb83a",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtg4QmGgHXEpuV\ndQ6RCKPt7qDSncXpBaaTk0QU3Nu6vrdrKALujwyZsMOofr0U30wO6uxrRmuEJLUt\ndJ8ZuKGdNmr3ViA1ECuYuNq1n9VIysJLI0HQQCvJAfWlpet5fggbxqGkV9/hDWl1\nh/Z89pLTvZU17K4goeIrwzvCIj3f+P/3SRvtrBZhxySDlelrsDZVamXIgTRwFhMq\n09QFyWvkXg4rCv2/tSf3DNhIwh6CDmv4c1fPYas32kI9Z7rMp7R6Ek4er5az9PUl\nYn9vH9yId+nEy+tSpy3isnhhQj2uW4wbkWgH2WHwdCgcJ38H6A5tFTX3xlL6KidK\nifr0N/55AgMBAAECggEAJPkqVqgiDj9T0eQwp20M6W147YhbHM1scnPmBQAO/lsX\nYIkVHtpyl+lXt/bRubnfTip3GGDYFj9wL/By2ptCLOrknjHHCSeZ8qApUpxtaWZz\nQmmP451Y9ysouhSB+dCGT8ziss9a0Gz4NOg0+Ond3aq/Oc9mR2PXevXOLQ742lmt\n2SrG7j/NCfjE33XJ2jCa1pGDuH/T+gZzdRPaFhCm4N/OJYHnw6crZH6+WPe4w7nn\nE7UTMdyJYlWwvJogt33fhJzhSrk8OOTo8/Dso3I+i8vx/6NUcNrLcUpetNPdHXa6\nOXvtRMPiOlQzsplCncJRNW6iS7gCJwGCztHPzsJ/VQKBgQDd04odkvCBCLiR7ijB\nEdUjR6zYZQbEWVciOID3M+Fu/o3w+xPGqBIdje7WyOllOKBEnhVnhJ73P9F+dNhl\nOkrGapFbD7ZAPSetg+GAfKFawsZD8P2OfmiX7/hrGnv10f10f12xy+rvoRxK84oP\nChTRMYInqU3qIMMuneU33UmmUwKBgQDIPpvQRLizNtEu3829pLtS3NNOeXdQEPtf\nF1RTe0awjjZZQQy7QKVQHQCMyaqbRReBDm9WSjctWCnaFmqcPy6WbUfUgc+55FlH\n1dMJiTyRiV/IaIYd1qjwnUlw9bO2P1L4f2Z+qJRm8MNN+YDyQU4GQtF60qKcc8dA\nhymeGrhWgwKBgQCNgZe22/ieZ8DOHt5So5ySn/OMK45QjSl/hAoJKEhj9PD5TEHG\nVYsQ3W0CCTKSRrg+bZX77mc2FLkAcWtlz/TJdEv7ih9aBWkdUGb2/wozitLNnpsx\nXkQ8wHF5aXCwVN/ZhDJx7EKX0O/qhEeK5oR3Gp0Lzf4NIA9C2qjRpVGJTwKBgQCs\nx3jiR6mm2RG9hFad39nSMcAR4jTU3RJIhnS4Y5InHU4/zSUTHUCG0795uzh+KSuS\nq8XdisP5WC0khFsQ3mNwYHKuJiP6ndF7bkBd5hBg80u2PJocfO/gTZbk5Nxf0Fvj\nFup1Nzh1aiDa0wI0Ba0xMc5WUBEHNc8jGn0KcrvDyQKBgAp9/GbCkOUBye6ZdbMa\nGSKYhqSJM/XrQ7BZhBE8davPiLayU2a1rrjmaGfC/YXsbpwrhvMQZQpQI3vNeb4e\nyDaAM+OTMADdzxSM05CXlETj5jjTvIatof+JvoB7xD0jb3o71wUX0otptl03SQZF\nsqPnIKyp+cNR94K5jGtfVP91\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-zoq3v@aibolit-2ec88.iam.gserviceaccount.com",
        "client_id": "103850110860627029708",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zoq3v%40aibolit-2ec88.iam.gserviceaccount.com"
      },
      "databaseURL": "https://aibolit-2ec88-default-rtdb.firebaseio.com"
    },
    api_sync_valid: {
      username: 'sync_data_his',
      password: 'Y#c=<R7?g5hzh)LA',
      api_key: 'aff7bae3-25b9-4fb5-9581-91b1e53d995f'
    },
    host_api_image: 'https://bvphusanhaiphong.thinklabs.com.vn/files'
  },
};

export const getConfig = env => config[env] || config.development;
