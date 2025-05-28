# 1단계: 빌드용 Node 이미지
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 2단계: 실행용 Nginx 이미지
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx 설정 필요시 아래 주석 해제하고 커스텀 가능
# COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
