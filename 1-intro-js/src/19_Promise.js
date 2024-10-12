import { carroPorId } from './data/carros'

const promise = new Promise((Resolve, reject) => {
    setTimeout(() => {
        const test = carroPorId(2);
        console.log(test);    
    }, 3000);
});

