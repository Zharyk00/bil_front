echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@159.65.123.228:/var/www/159.65.123.228/

echo "Done!"