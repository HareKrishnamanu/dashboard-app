@echo off
REM =============================================================
REM Dashboard App - Automated Submission Script
REM Run this script to automatically set up Git and push to GitHub
REM =============================================================

REM Colors for output
color 0A
cls

echo ============================================================
echo   DASHBOARD APP - AUTOMATED GITHUB SETUP
echo ============================================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo ERROR: Git is not installed!
    echo.
    echo Please download and install Git from:
    echo https://git-scm.com/download/win
    echo.
    echo Then restart this script.
    pause
    exit /b 1
)

color 0A
echo [✓] Git is installed
echo.

REM Navigate to project
cd /d "c:\Users\vpericherla\dashboard-app\dashboard-app"
if %errorlevel% neq 0 (
    color 0C
    echo ERROR: Cannot navigate to project folder!
    pause
    exit /b 1
)

echo [✓] Navigated to project folder
echo.

REM Configure Git
echo Configuring Git...
git config user.email "sivakumari06061979@gmail.com"
git config user.name "HareKrishnamanu"
echo [✓] Git configured with your details
echo.

REM Initialize Git repository
echo Initializing Git repository...
git init
echo [✓] Git repository initialized
echo.

REM Add all files
echo Adding files to Git...
git add .
echo [✓] All files added
echo.

REM Commit files
echo Committing files...
git commit -m "Dashboard App - Chapters 1-10 Complete"
echo [✓] Files committed
echo.

REM Create remote
echo Setting up GitHub remote...
git remote add origin https://github.com/HareKrishnamanu/dashboard-app.git
if %errorlevel% neq 0 (
    echo [!] Remote might already exist, updating...
    git remote set-url origin https://github.com/HareKrishnamanu/dashboard-app.git
)
echo [✓] GitHub remote configured
echo.

REM Rename branch to main
echo Setting up main branch...
git branch -M main
echo [✓] Branch renamed to main
echo.

REM Push to GitHub
echo Pushing to GitHub...
echo.
echo ============================================================
echo IMPORTANT: GitHub will now ask for authentication!
echo 
echo You have two options:
echo 1. Use Personal Access Token (Recommended)
echo    - Go to: https://github.com/settings/tokens
echo    - Generate new token
echo    - Paste it as password
echo 
echo 2. Use GitHub CLI (if installed)
echo    - It will handle authentication automatically
echo.
echo ============================================================
echo.

git push -u origin main

if %errorlevel% neq 0 (
    color 0C
    echo.
    echo ERROR: Push to GitHub failed!
    echo.
    echo Make sure:
    echo 1. Repository exists at: https://github.com/HareKrishnamanu/dashboard-app
    echo 2. The repository is PUBLIC
    echo 3. You have correct GitHub credentials
    echo.
    pause
    exit /b 1
)

color 0B
cls
echo ============================================================
echo   SUCCESS! ✓
echo ============================================================
echo.
echo Your code has been pushed to GitHub!
echo.
echo Next steps:
echo.
echo 1. Go to: https://vercel.com
echo 2. Sign in with GitHub
echo 3. Click "New Project"
echo 4. Select "dashboard-app" repository
echo 5. Click "Deploy"
echo 6. Wait 2-3 minutes for deployment
echo 7. Copy your live URL
echo.
echo Your GitHub repository:
echo https://github.com/HareKrishnamanu/dashboard-app
echo.
echo ============================================================
echo.
pause
