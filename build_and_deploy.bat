@echo off
echo Starting Build and Deploy Process...

REM Build
echo Building the project...
if not exist build mkdir build
copy index.html build\index.html
echo Build completed!

REM Deploy
echo Deploying the project...
set DEPLOY_DIR=C:\Deployment
if not exist "%DEPLOY_DIR%" mkdir "%DEPLOY_DIR%"
xcopy build "%DEPLOY_DIR%" /E /H /Y
echo Deployment completed!

echo All processes completed successfully!
exit /b 0
