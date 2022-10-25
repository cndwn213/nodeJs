const schedule = require("node-schedule");

// 만들어진 스케쥴 객체를 대입할 변수
let scheduleObj = null;

// 스케쥴 설정하는 함수
const set = (s) => {
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek; // 0 -> 일요일부터 시작, [2, 3]은 화요일, 수요일
    rule.hour = s.hour;
    rule.minute = s.minute;

    var job = schedule.scheduleJob(rule, function(){
        console.log('Scheduler has excuted!');
    });

    scheduleObj = job;
};

// 원래 있던 스케줄을 취소시키는 함수
const cancle = () => {
    if(scheduleObj != null){
        scheduleObj.cancle();
    }
};

// 스케쥴이 취소와 생성 동시에 하는 함수
const setScheduler = (s) => {
    cancle();
    set(s);
};

// set에 넣어줄 파라미터 데이터
const scheduleData = {
    dayOfWeek : [2,3],
    hour : 23,
    minute : 30
}

setScheduler(scheduleData);


