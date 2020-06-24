FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE registryservice.jar
CMD ["java", "-jar", "registryservice.jar"]
EXPOSE 8181/tcp