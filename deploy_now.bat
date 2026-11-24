@echo off
setlocal
cd /d "%~dp0"

set COMMIT_MSG=%~1
if "%COMMIT_MSG%"=="" set COMMIT_MSG=feat(rosary): auto synchronized deploy

echo ======================================================
echo  [ë¬µì£¼ê¸°ë„ ?? ?„ìš© ?€?¥ì†Œ ë°?Vercel ?¤ìš´???µí•© ?™ì‹œ ë°°í¬
echo  - ì»¤ë°‹ ë©”ì‹œì§€: %COMMIT_MSG%
echo ======================================================

echo.
echo [1/4] index.html ?™ê¸°??ì¤?(rosary.html -> index.html)...
copy /Y rosary.html index.html > nul

echo.
echo [2/4] rosary-app GitHub ?€?¥ì†Œ ?¸ì‹œ ì¤?..
git add -A
git commit -m "%COMMIT_MSG%"
git push origin main

echo.
echo [3/4] ?¤ìš´??Vercel ?€?¥ì†Œ (consult_diary) ?™ê¸°??ë³µì‚¬ ì¤?..
if exist "C:\antigravity\real_consult_diary" (
    copy /Y rosary.html C:\antigravity\real_consult_diary\rosary.html > nul
    copy /Y rosary.html C:\antigravity\real_consult_diary\index.html > nul

    echo.
    echo [4/4] ?¤ìš´??Vercel ?€?¥ì†Œ (consult_diary) GitHub ?¸ì‹œ ì¤?..
    git -C C:\antigravity\real_consult_diary add rosary.html index.html
    git -C C:\antigravity\real_consult_diary commit -m "%COMMIT_MSG%"
    git -C C:\antigravity\real_consult_diary pull --rebase origin main
    git -C C:\antigravity\real_consult_diary push origin main
) else (
    echo [?ˆë‚´] real_consult_diary ?´ë”ê°€ ?†ìŠµ?ˆë‹¤.
)

echo.
echo ======================================================
echo  ë¬µì£¼ê¸°ë„ ???™ì‹œ ?ë™ ë°°í¬ ?„ë£Œ!
echo ======================================================
