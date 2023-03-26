// import { expectType } from 'tsd';

// console.log("hello ts1");
// const a: number = 2;

// expectType<string>('aaa');
// expectType<string>(455);

void function a(){
  console.log('hello world');
}();
// 类似于
void((function a(){ console.log('hello world 1')})());