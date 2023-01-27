// 实现一个 retry 函数，实现 `fn` 请求失败，针对 `count` 重试，对于重试的 retry，超过 timeout 请求时间，则抛错

function retry(fn, count, timeout) {
    console.log('retry', count);
    const promise2 = new Promise((resolve,reject)=>{
        const timerFn = () => new Promise((resolve, reject)=>{
            setTimeout(() => {
                reject('请求超时');
            }, timeout);
        });
        if(count > 0){
            Promise.race([fn(), timerFn()])
            .then((value)=>{
                resolve(value);
            },(reason)=>{
                if(reason === '请求超时'){
                    reject('请求超时');
                }else{
                    retry(fn, --count, timeout);
                }
            })
        }else{
            reject('请求'+count+'失败')
        }
    })
    return promise2;
};

retry(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('error')
        }, 1000);
    })
}, 3, 3000).then((value)=>{
    console.log('success');
},(error)=>{
    console.log('failed', error);
});