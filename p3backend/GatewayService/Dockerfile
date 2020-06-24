FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE gatewayservice.jar
CMD ["java", "-jar", "gatewayservice.jar"]
EXPOSE 8212/tcp