FROM fusuf/whatsasena:latest

RUN git clone https://github.com/udnisap208/flopzypro /root/HTM
WORKDIR /root/HTM/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
