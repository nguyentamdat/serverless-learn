export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "dats-note-app"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://zkbepa8ge3.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_kaNaUMAux",
      APP_CLIENT_ID: "3bo112qq527luh3nvgq6ohjbt",
      IDENTITY_POOL_ID: "us-east-2:ab8c793f-54a8-4bce-91cf-99f4acd72e91"
    }
  };
  