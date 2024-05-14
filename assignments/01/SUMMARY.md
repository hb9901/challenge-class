# React란?

### 1. 소개

* UI(사용자 인터페이스) 제작을 도와주는 도구
* cdn을 통해서도 간단하게 사용 가능하다
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        const appEl = document.getElementById("app");
        const root = ReactDOM.createRoot(appEl);

        const Greeting = () => <h1>Hello World</h1>;

        root.render(<Greeting />);
    </script>

    ```

### 2. 등장 배경

* 유지보수의 여려움
    * 웹 애플리케이션이 커질수록 HTML, CSS, JavaScript 코드 간의 상호작용이 복잡해져 유지 보수가 어려워진다.
* DOM 조작의 비효율성
    * Javascript를 사용한 직접적인 DOM 조작은 성능저하를 가져올 수 있다.
    * DOM은 웹페이지의 구조를 나타내므로, 자주 변경될 경우 브라우저의 렌더링 선능이 크게 저하 될 수 있다.
* 재사용성 부족
    * 전통적인 방식에서는 코드의 재사용성이 낮다.

<br/>

# React를 사용한 웹 개발과 기존 웹 개발의 차이점

### 1. MPA -> SPA

* MPA
    * 전통적인 웹 개발 방식
    * 여러 개의 html 페이지를 로드
* SPA
    * 빠른 페이지 반응성과 부드러운 사용자 경험 제공
    * 한 개의 html 페이지를 로드

### 2. SSR -> CSR

* SSR
    * 전통적인 웹 개발 방식
    * 서버에서 html을 완성 후 통신
* CSR
    * 클라이언트(브라우저)에서 html 완성
    * 브라우저 환경에서 사용할 수 있는 dom 접근 가능
    * SEO가 필요하다는 단점이 있음

<br/>

# React 주요 개념

### 1. 가상 DOM

* 실제 DOM을 흉내 낸 가상의 DOM
* 자바스크립트 내부에 존재한다.
* 실제 DOM보다 비교 비용이 더 싸다.
* 비교를 위해 최소 2개의 가상 DOM이 필요하다.
    * 이전 상태의 가상 DOM
    * 상태 변경 후의 가상 DOM

### 2. JSX

* JavaScript를 확장한 문법으로, React에서 UI 구조를 표현하는 데 사용한다.
* React.createElement 함수 호출을 직관적으로 하기 위해서 사용한다.
* **특징**
    * HTML과 유사
    * JavaScript와의 결합
    * 컴포넌트 기반
* **장점**
    * 읽기 쉽고 작성하기 편리
    * 컴포넌트 구조 명확화
* **JSX 사용 시 주의사항**
    * 브라우저는 JavaScript의 확장인 JSX는 읽지 못하고 JavaScrip만 읽을 수 있다.
    * 따라서 트랜스파일러(Babel 등)를 사용하여 JSX를 일반 JavaScript로 변환하여 웹 브라우저에 보내주어야 한다.

### 3. React Component vs React Element

1. 리액트 컴포넌트 (React Component)
    * 리액트 컴포넌트는 UI의 한 부분을 캡슐화한 코드 블록
    * 과거에는 클래스를 사용하였지만 이제는 함수로 만드는 것이 일반적
        ```javascript
        function Greeting(){
            return <div>Hello World</div>
        }
        ```
2. 리액트 엘리먼트 (React Element)
    * 리액트 엘리먼트는 컴포넌트의 인스턴스로, 화면에 표시할 내용을 기술한 객체
    * JSX 문법을 사용하여 생성할 수 있다.
        ```javascript
        <Greeting/>
        ```

### 4. State
* 컴포넌트 내부의 데이터
* state가 바뀌면 컴포넌트는 리렌더링
    * 리렌더링은 함수의 재실행을 의미하고, 그 결과 화면이 다시 그려진다.
    * 함수는 재실행되지만 상태값은 어딘가에 계속 기억이 되고 있다.

### 5. Props
* 부모 컴포넌트로부터 자식 컴포넌트에 전달하는 데이터
* 자식 컴포넌트 입장에서 Props는 **읽기 전용**으로, 수정해서는 안 된다.
* Props의 장점
    * 재사용성 증가
    * 유연성 증가
* 부모가 전달해 주는 props의 값이 바뀌면 자식 컴포넌트는 리렌더링 한다.

### 6. 리렌더링의 조건
1. `state`의 변경
2. 부모 컴포넌트로부터 전달 받는 `props`의 값 변경
3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트는 리렌더링된다.
    * React.memo를 사용하여 막을 수 있다.

### 7. React Component의 생애주기
![alt text](image-1.png)
![alt text](image.png)

