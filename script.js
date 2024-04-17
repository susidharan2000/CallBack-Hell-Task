document.querySelector('.output').addEventListener('click',()=>{
    setTimeout(() => {
        document.querySelector('.output').innerHTML = '10';
        setTimeout(() => {
            document.querySelector('.output').innerHTML = '9';
            setTimeout(() => {
                document.querySelector('.output').innerHTML = '8';
                setTimeout(() => {
                    document.querySelector('.output').innerHTML = '7';
                    setTimeout(() => {
                        document.querySelector('.output').innerHTML = '6';
                        setTimeout(() => {
                            document.querySelector('.output').innerHTML = '5';
                            setTimeout(() => {
                                document.querySelector('.output').innerHTML = '4';
                                setTimeout(() => {
                                    document.querySelector('.output').innerHTML = '3';
                                    setTimeout(() => {
                                        document.querySelector('.output').innerHTML = '2';
                                        setTimeout(() => {
                                            document.querySelector('.output').innerHTML = '1';
                                            setTimeout(() => {
                                                document.querySelector('.output').innerHTML = 'Happy Independence Day';
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 300);  
});