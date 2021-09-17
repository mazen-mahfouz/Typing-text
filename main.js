
let text_span = document.querySelector('#text');

let text_array = ['There is no substitute for hard work.', 'Learning is not a spectator sport.', 'Today a reader, tomorrow a leader.', 'If you can dream it, you can do it.']


let index_text_array = 0;
let index_text = 0;
let o = false;
let time;
let time2;
ma2();

function ma2() {
    time = setInterval(function mazen() {
        if (index_text <= text_array[index_text_array].length && o == false) {
            text_span.textContent = text_array[index_text_array].slice(0, index_text++);
            clearInterval(time2);
        } else {
            o = true;
            ma();
            clearInterval(time);
        }
    }, 200);
}

function ma() {
    setTimeout(() => {
        time2 = setInterval(function mazen2() {
            if (o == true) {
                if (index_text > 0 && o == true) {
                    text_span.textContent = text_array[index_text_array].slice(0, index_text--);
                } else {
                    if (index_text_array < text_array.length - 1 && index_text_array > -1) {
                        index_text_array++;
                        o = false;
                        ma2();
                    } else {
                        index_text_array = 0;
                        o = false;
                        ma2()
                    }
                }
            }
        }, 100);
    }, 1000);
}
