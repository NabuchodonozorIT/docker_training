FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY . /var/www/

EXPOSE 8080

CMD ["nginx","-g","daemon off;"]
