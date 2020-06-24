FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE gateway.jar
CMD ["java", "-jar", "gateway.jar"]
EXPOSE 8212/tcp