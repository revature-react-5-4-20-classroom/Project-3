FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE registry.jar
CMD ["java", "-jar", "registry.jar"]
EXPOSE 8181/tcp