FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE dataservice.jar
CMD ["java", "-jar", "dataservice.jar"]
EXPOSE 1235/tcp