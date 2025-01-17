### What does the function do?

Calculate the area of a circle given its radius. The name of the function is calculateCircleArea

### How to deploy to google cloud?

run the following code in your terminal. You will need an active google cloud account, and google cloud needs to be installed on your operating system (im using Ubuntu)

gcloud functions deploy calculateCircleArea \
 --runtime nodejs18 \
 --trigger-http \
 --allow-unauthenticated \
 --entry-point app
