# 1단계: 빌더 이미지 (Gradle로 JAR 빌드)
FROM gradle:8.5-jdk21 AS builder
WORKDIR /app
COPY . .
RUN gradle build -x test

# 2단계: 실행 이미지 (가벼운 JDK만 있는 이미지)
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
