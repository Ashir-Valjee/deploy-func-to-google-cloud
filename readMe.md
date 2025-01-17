### What does the function do?

Calculate the area of a circle given its radius. The name of the function is calculateCircleArea

### How to set up the google cloud CLI on your terminal

follow the steps in https://cloud.google.com/sdk/docs/install?form=MG0AV3#deb

Initialize the gcloud CLI by running gcloud init

### How to deploy to google cloud?

create or log in to your google cloud account
create a google cloud project

Enable the Artifact Registry, Cloud Build, Cloud Run Admin API, and Cloud Logging APIs.

You can enable these APIs by navigating to the API Library in the Google Cloud Console and searching for each API

Set the default project for your Cloud Run service by running gcloud config set project PROJECT_ID.

Replace PROJECT_ID with the name of your project

Grant the Cloud Build Service Account role to the Compute Engine default service account by running:
gcloud projects add-iam-policy-binding PROJECT_ID \
 --member=serviceAccount:PROJECT_NUMBER-compute@developer.gserviceaccount.com \
 --role=roles/cloudbuild.builds.builder
Replace PROJECT_NUMBER with your Google Cloud project number

Navigate to your project directory and run:

gcloud functions deploy calculateCircleArea \
 --runtime nodejs18 \
 --trigger-http \
 --allow-unauthenticated \
 --entry-point app

Check the status of your deployment in the Google Cloud Console
