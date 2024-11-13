# render-build.sh
#!/usr/bin/env bash
apt-get update
apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libnspr4 \
    libnss3 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    wget \
    gconf-service \
    libpango1.0-0 \
    libxshmfence1 \
    libx11-xcb1 \
    libxtst6 \
    libxss1
