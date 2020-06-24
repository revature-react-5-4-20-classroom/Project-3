FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE RegistryService.jar
CMD ["java", "-jar", "RegistryService.jar"]
EXPOSE 8181/tcp