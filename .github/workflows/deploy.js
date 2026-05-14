# -------------------------
  # CD: Deployment
  # -------------------------
  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18.x
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build app
        run: npm run build --if-present

      - name: Deploy to server
        run: |
          echo "Deploying application..."
          # Replace with your real deployment command e.g.:
          # scp -r ./build user@server:/var/www/app
          # ssh user@server "pm2 restart app"
