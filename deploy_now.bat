@echo off
setlocal
cd /d "%~dp0"

set COMMIT_MSG=%~1
if "%COMMIT_MSG%"=="" set COMMIT_MSG=feat(rosary): auto synchronized deploy

echo === [1/3] Sync index.html ===
copy /Y rosary.html index.html > nul

echo === [2/3] Push rosary-app ===
git add -A
git commit -m "%COMMIT_MSG%"
git push origin main

echo === [3/3] Push consult_diary ===
if exist C:\antigravity\real_consult_diary\rosary.html (
    copy /Y rosary.html C:\antigravity\real_consult_diary\rosary.html > nul
    copy /Y rosary.html C:\antigravity\real_consult_diary\index.html > nul
    git -C C:\antigravity\real_consult_diary add rosary.html index.html
    git -C C:\antigravity\real_consult_diary commit -m "%COMMIT_MSG%"
    git -C C:\antigravity\real_consult_diary pull --rebase origin main
    git -C C:\antigravity\real_consult_diary push origin main
)

echo === ALL DEPLOY FINISHED ===
