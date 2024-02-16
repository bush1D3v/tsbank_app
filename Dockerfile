FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

EXPOSE 8081

CMD ["bun", "start-no-clear"]
