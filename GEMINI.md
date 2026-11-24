# 🙏 묵주기도 & 연도 웹앱 (rosary-app) 작업 규칙

## 🚨 0. 최우선 시스템 규칙 (경로 및 샌드박스 안정성)
- **작업 및 배포 기준 경로는 오직 C드라이브(`C:\antigravity\rosary-app`)입니다!** 절대 과거 D드라이브 경로를 참조하거나 그곳에 복사/배포하지 마세요.
- 파일 읽기는 반드시 **`read_file`**, 파일 수정은 반드시 **`edit_file`** (또는 **`write_file`**) 도구를 우선 사용하세요.
- 배포나 git 명령어를 실행할 때는 반드시 **`BypassSandbox: true`** 로 설정하여 호출하세요.

이 폴더(`C:\antigravity\rosary-app`)는 **가톨릭 묵주기도 및 연도 웹앱** 전용 작업 공간입니다.

## 1. 핵심 파일 구조 및 🚨 이중 동시 배포 파이프라인 (필수 준수)
- **`rosary.html` (가장 중요 / 실제 서비스 본체):**
  - 모든 UI/기능 수정은 **`C:\antigravity\rosary-app\rosary.html`** 에 직접 적용합니다.
- **🚨 배포 규칙 (Vercel 실운영 반영 누락 원천 방지):**
  - 수정 후에는 항상 **`index.html`** 동기화가 필수입니다 (`copy /Y rosary.html index.html`).
  - 현재 Vercel 실운영 도메인은 `consult_diary` 저장소(`C:\antigravity\real_consult_diary`)와 연동되어 있습니다.
  - 따라서 배포 시에는 **반드시 아래 둘 중 하나를 실행하여 양쪽 저장소 모두 동시 배포**해야 합니다:
    1. **스크립트 실행 (가장 추천):** `cmd /c deploy_now.bat "커밋메시지"` (BypassSandbox: true)
    2. **직접 실행 시:**
       - `copy /Y rosary.html index.html`
       - `git add -A; git commit -m "..."; git push origin main` (`rosary-app` 저장소)
       - `copy /Y rosary.html C:\antigravity\real_consult_diary\rosary.html`
       - `copy /Y rosary.html C:\antigravity\real_consult_diary\index.html`
       - `git -C C:\antigravity\real_consult_diary commit -am "..."; git -C C:\antigravity\real_consult_diary push origin main`

## 2. AI 에이전트 필수 주의사항 (깜빡임 및 오염 방지)
1. **임시 파이썬 파일(`patch_*.py`, `check_*.py` 등) 생성 금지:**
   - 작업 폴더 안에 일회용 `.py`나 임시 `.html` 파일을 잔뜩 만들지 마세요.
   - 파일 수정은 기본 편집 도구(`edit_file`)를 사용해 한 번에 깔끔하게 적용하거나, 불가피하게 만든 임시 스크립트는 작업 즉시 삭제하세요.
2. **수정 전 백업 및 한 번에 수정:**
   - 여러 번 나누어 저장하면 프리뷰 화면이 깜빡이거나 캐시가 꼬입니다. 수정 계획을 먼저 세운 뒤 한 번에 수정하세요.

## 3. 🚨 배포 전 필수 사전 검증 관문 (Pre-deploy Verification)
UI나 기능을 수정한 후 배포하기 전, **반드시 아래 핵심 컴포넌트와 플로우가 100% 정상 보존되어 있는지 사전에 자체 점검**해야 합니다:

1. **핵심 UI 컴포넌트 온전성 체크:**
   - `introLiturgicalBanner`: 오늘의 가톨릭 전례력 배너
   - `introPrayerTypeCard`: 기도 선택 (성모 묵주기도 vs 자비의 기도)
   - `introMysteryCard`: 묵주기도 4대 신비 그리드
   - `btnStartPrayer`: **하단 묵주기도 시작하기 메인 버튼**
2. **기도 시작 & 이어하기 플로우 무결성 체크:**
   - 첫 화면에서는 이어하기 카드(`introResumeCard`)를 항상 숨김(`display: none`).
   - `handleStartPrayerRequest()`: 하단 시작 버튼 클릭 시 진행 중인 기록이 있으면 반드시 `resumeConfirmModal`(이어하기/새로시작 선택 팝업)을 띄우는지 점검.
   - `btnResumeConfirmContinue` & `btnResumeConfirmRestart`: 이어하기 및 새로 시작 분기 정상 연결 여부 점검.
   - 신규 기도 시작 또는 처음부터 시작 시에만 십자가 친구(親吻) 오버레이 및 모드/지향 선택 모달로 연결되는지 확인.
3. **사이드이펙트 방지 원칙:**
   - 상단 배너나 텍스트 디자인을 변경하더라도, 그 아래에 배치된 핵심 기능 카드들이 실수로 지워지거나 스타일(`display: none !important`)로 가려지지 않도록 `git diff`를 의무 검토합니다.
