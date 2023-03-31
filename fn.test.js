const fn =require('./fn');

test('1번쨰 1은 1이다.', () => {
    expect(1).toBe(1);
});

test('2번째 2 더하기 3은 5야', () => {
    expect(fn.add(2,3)).toBe(5); //tobe가 기대되는 결과값. 
});

test('3번째 3 더하기 3은 5가 아니야',()=>{
    expect(fn.add(3,3)).not.toBe(5); //tobe가 기대되는 결과값. 
});

test('4번째 이름과 나이를 전달받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("bum", 28)).toEqual({
        name: "bum", 
        age: 28,
    }); 
});

test('5번째 이름과 나이를 전달받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("범석", 28)).toStrictEqual({
        name: "범석", 
        age: 28, 
        gender: "",
    }); 
});

// 매처(matcher)란 Jest와 같은 자바스크립트 테스트 라이브러리에서, 
// 예상된 결과와 실제 결과가 일치하는지 확인하는 데 사용되는 함수입니다.

// toBe 원시타입(문자열, 숫자, 불리언)을 비교할 때 
// toEqual => 객체 값이 같기만 하면 통과함 => 덜 정확함 
// toStrictEqual  => 두 객체가 정확히 같아야함 

// toBeNull()은 값이 null인지를 확인합니다.
// toBeDefined()는 값이 정의되었는지 (undefined가 아닌지) 확인합니다.
// toBeUndefined()는 값이 undefined인지를 확인합니다.

test('6번째 null은 null 입니다', ()=>{
    expect(null).toBeNull(); 
});

// toBeTruthy 값이 truthy한 값인지를 확인합니다. 즉, Boolean(value)가 true를 반환하는지 확인합니다.
// toBeFalsy 값이 falsy한 값인지를 확인합니다. 즉, Boolean(value)가 false를 반환하는지 확인합니다.

test('7번째 0은 false 입니다', ()=>{
    expect((fn.add("hello", "world"))).toBeFalsy(); 
});

test('8번째 0은 True 입니다', ()=>{
    expect((fn.add("hello", "world"))).toBeTruthy(); 
});

// toBeGraterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 적다
// toBeLessThanOrEqual 작거나 같다.

test('9번째 ID는 10자 이하이어야 합니다', ()=>{
    const id = "THe_BLACK";
    expect(id.length).toBeLessThanOrEqual(10);
});

test('10번째 비밀번호는 4자리', ()=>{
    const pw = "1234";
    expect(pw.length).toBe(4);
});

test('11번째 0.1 더하기 0.2 는 0.3 입니다.', ()=>{
    expect (fn.add(0.1,0.2)).toBeCloseTo(0.3);
});

//  Expected: 0.3
// Received: 0.30000000000000004  => 컴터가 인식을 못함요~ 이럴 땐 Tobe를 쓰지말자
// toBeCloseTo 을 쓰면 해, 값이 가까운지, 근사치를 비교해줌 


test('12번째 hello World에 h라는 글자가 있나용?', ()=>{
    expect("hello World").toMatch(/h/);
});


test('13번째 유저리스트에 mike가 있나요?', ()=>{
    const user = "Mike";
    const userList = ['Tom', 'Mike','Jane','Kai']
    expect(userList).toContain(user);
});

test('14번째 이거 에러 맞죠?', ()=>{
    expect(() => fn.throwErr()).toThrow("기러");
});

test('15번째 이거 에러 맞죠?', ()=>{
    expect(() => fn.throwErr()).toThrow("에러");
});

// 특정 에러가 발생하는지 테스트 할 수 있음 

