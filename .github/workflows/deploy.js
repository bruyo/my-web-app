 # -------------------------
  # CD: Deployment
  # -------------------------
  deploy:OB
    runs-on: ubuntu-latest
    needs: build   # ensures build + tests pass first

    # Only deploy on push to main (not PRs)
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18.x

      - name: Install dependencies
        run: npm ci

      - name: Build app
        run: npm run build --if-present

      # -------------------------
      # Example Deployment Step
      # -------------------------
      - name: Deploy to server
        run: |
          echo "Deploying application..."
          # Replace this with your real deployment command
          # Examples:
          # scp -r ./build user@server:/var/www/app
          # ssh user@server "pm2 restart app"
          # or deploy to cloud (AWS, Azure, Vercel, etc.)
