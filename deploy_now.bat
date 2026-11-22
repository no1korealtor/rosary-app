@echo off
chcp 65001 > nul
setlocal
cd /d "%~dp0"

echo ======================================================
echo  [묵주기도 앱] 전용 독립 저장소 초고속 다이렉트 배포
echo ======================================================

echo.
echo [1/2] index.html 동기화 중...
copy /Y "rosary.html" "index.html" > nul

echo.
echo [2/2] GitHub 저장소(rosary-app)로 즉시 배포 중...
git add -A
git commit -m "feat: fast direct deploy to standalone rosary-app"
git push origin main

if errorlevel 1 (
    echo.
    echo [안내] 배포 중 오류가 발생했습니다.
    exit /b 1
)

echo.
echo ======================================================
echo  ✨ 묵주기도 앱이 초고속으로 완벽하게 배포되었습니다!
echo ======================================================
