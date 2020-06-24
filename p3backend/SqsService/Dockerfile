FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE sqsservice.jar
CMD ["java", "-jar", "sqsservice.jar"]
EXPOSE 8181/tcp