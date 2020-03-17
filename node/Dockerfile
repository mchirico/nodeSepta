FROM node AS build
RUN mkdir /workspace
WORKDIR /workspace
COPY . /workspace
RUN npm install
RUN npm test
RUN npm run build

# Python is not included in alpine, 
# which is needed to build bcrypt

FROM node:current-alpine
COPY --from=build /workspace /workspace
WORKDIR /workspace
RUN npm rebuild grpc
ENTRYPOINT ["node"]
CMD ["build/index.js"]
