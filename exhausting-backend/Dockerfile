FROM golang:1.23

# Install CompileDaemon
RUN go install github.com/githubnemo/CompileDaemon@latest
RUN apt-get update && apt-get install -y poppler-utils wv unrtf tidy 
WORKDIR /app
COPY . /app

RUN go env
# RUN go mod tidy
# RUN go mod vendor
# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Use the entrypoint script to start the application
ENTRYPOINT ["/entrypoint.sh"]