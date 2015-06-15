FROM node:0.10.38
ADD src/ /faye
RUN cd /faye && npm install

EXPOSE 8000
CMD ["node", "/faye/faye.js"]
