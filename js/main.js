'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const result = ['大吉', '中吉', '末吉', '凶'];

        btn.textContent = result[Math.floor(Math.random() * result.length)];

        // const n = Math.floor(Math.random() * 3);

        // switch(n){
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '小吉';
        //         break;
        //     case 2:
        //         btn.textContent = '末吉';
        //         break;
        // }
    });

}