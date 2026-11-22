# 🙏 묵주기도 & 연도 웹앱 (rosary-app) 작업 규칙

## 🚨 0. 최우선 시스템 규칙 (경로 및 샌드박스 안정성)
- **작업 및 배포 기준 경로는 오직 C드라이브(`C:\antigravity\rosary-app`)입니다!** 절대 과거 D드라이브 경로를 참조하거나 그곳에 복사/배포하지 마세요.
- 파일 읽기는 반드시 **`read_file`**, 파일 수정은 반드시 **`edit_file`** (또는 **`write_file`**) 도구를 우선 사용하세요.
- 배포나 git 명령어를 실행할 때는 반드시 **`BypassSandbox: true`** 로 설정하여 호출하세요.

이 폴더(`C:\antigravity\rosary-app`)는 **가톨릭 묵주기도 및 연도 웹앱** 전용 작업 공간입니다.

## 1. 핵심 파일 구조 및 배포 방식
- **`rosary.html` (가장 중요 / 실제 서비스 본체):**
  - 현재 실서비스(Vercel)에 배포되는 **단일 통합 파일(HTML + CSS + JS + 성화 내장)** 입니다.
  - 모든 UI/기능 수정은 **`C:\antigravity\rosary-app\rosary.html`** 에 직접 적용합니다.
- **배포:**
  - `C:\antigravity\rosary-app` 자체가 GitHub 원격 저장소(`origin/main`)와 직접 연결되어 있습니다.
  - 수정 후 `C:\antigravity\rosary-app`에서 바로 `git add rosary.html && git commit -m "..." && git push origin main`을 실행하면 Vercel에 실시간 자동 배포됩니다.

## 2. AI 에이전트 필수 주의사항 (깜빡임 및 오염 방지)
1. **임시 파이썬 파일(`patch_*.py`, `check_*.py` 등) 생성 금지:**
   - 작업 폴더 안에 일회용 `.py`나 임시 `.html` 파일을 잔뜩 만들지 마세요.
   - 파일 수정은 기본 편집 도구(`edit_file`)를 사용해 한 번에 깔끔하게 적용하거나, 불가피하게 만든 임시 스크립트는 작업 즉시 삭제하세요.
2. **수정 전 백업 및 한 번에 수정:**
   - 여러 번 나누어 저장하면 프리뷰 화면이 깜빡이거나 캐시가 꼬입니다. 수정 계획을 먼저 세운 뒤 한 번에 수정하세요.
