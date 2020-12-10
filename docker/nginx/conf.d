upstream back {
    server web:8000;
}

upstream front {
    server app:3000;
}

server {
    listen 80;
    listen [::]:80;
    server_name browneria.com.br;

    location / {
        proxy_pass http://front;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://back;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_redirect off;
    }

    location /admin {
        proxy_pass http://back;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_redirect off;
    }

    location /api/static/ {
        autoindex on;
        alias /home/app/static/;
    }

    location /api/media/ {
        autoindex on;
        alias /home/app/media/;
    }
}
