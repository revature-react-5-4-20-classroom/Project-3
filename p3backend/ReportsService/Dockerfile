FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE reportsservice.jar
CMD ["java", "-jar", "reportsservice.jar"]
EXPOSE 8181/tcp