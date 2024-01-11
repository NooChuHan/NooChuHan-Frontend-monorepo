🚀 완성된 MR 템플릿 🚀

# 해결하려는 문제가 무엇인가요?

# 어떻게 해결했나요?

## Attachment

* 이번 MR의 Front 동작을 이해를 돕는 GIF 파일 첨부!

* 리뷰어의 이해를 돕기 위한 모듈/클래스 설계에 대한 Diagram 포함!

 

// 작성하기 전에 지워주세요!
😊 작성 예시 😊
# 해결하려는 문제가 무엇인가요?

* TS2305: Module “react-router” has no exported member ‘useHistory’. 오류를 내면서 빌드가 깨집니다. 다른 모듈에 의해 react-router 버전이 5 → 6으로 올라간 게 문제입니다.

# 어떻게 해결했나요?

* 사용하는 react-router의 버전을 package.json에 명시합니다.
 
