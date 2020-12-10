# Pull official image.
FROM python:3.7
LABEL maintainer="thiagoleal11@gmail.com"

# Set environment variables.
ENV PYTHONUNBUFFERED 1

# Create the new user
RUN addgroup --system app && adduser --system --group app

# Create the apropriate directories and set the workdir
ENV HOME=/home/app
ENV APP_HOME=/home/app/api
RUN mkdir $APP_HOME

# Set the working directory to /home/app/web
WORKDIR $APP_HOME

# Set static directories
ENV STATIC_ROOT=$HOME/static
ENV MEDIA_ROOT=$HOME/media
RUN mkdir $STATIC_ROOT
RUN mkdir $MEDIA_ROOT

# Install dependencies.
RUN pip install --upgrade pip
COPY requirements.txt $APP_HOME/requirements.txt
RUN pip install -r requirements.txt

# Chown all the files to app's user
RUN chown -R app:app $HOME

USER app
